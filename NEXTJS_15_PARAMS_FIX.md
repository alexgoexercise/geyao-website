# Next.js 15 Params Promise 问题修复

## 🚨 问题描述

用户遇到了Next.js 15的新特性警告：

```
A param property was accessed directly with `params.id`. `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap `params` with `React.use()`.
```

以及Client Component的async错误：

```
<BandPage> is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.
```

## 🔍 问题分析

在Next.js 15中，动态路由的`params`对象现在是一个Promise，而不是直接的对象。这是为了支持异步路由参数的新特性。

**重要发现**: Client Components不能是async的，只有Server Components可以是async。动态路由页面应该默认是Server Components。

### 影响的文件
- `src/app/bands/[id]/page.tsx`
- `src/app/people/[id]/page.tsx`
- `src/app/videos/[id]/page.tsx` (已经正确实现)

## ✅ 解决方案

### 1. 移除 'use client' 指令

**关键修复**: 动态路由页面应该是Server Components，不需要 `'use client'` 指令。

### 2. 更新接口定义

**修复前:**
```typescript
interface BandPageProps {
  params: {
    id: string;
  };
}
```

**修复后:**
```typescript
interface BandPageProps {
  params: Promise<{
    id: string;
  }>;
}
```

### 3. 使用async/await处理params

**修复前:**
```typescript
"use client";

const BandPage = ({ params }: BandPageProps) => {
  const band = bandsData.find(b => b.id === params.id);
  // ...
}
```

**修复后:**
```typescript
const BandPage = async ({ params }: BandPageProps) => {
  const { id } = await params;
  const band = bandsData.find(b => b.id === id);
  // ...
}
```

### 4. 完整的修复示例

#### Bands页面 (`src/app/bands/[id]/page.tsx`)
```typescript
import { notFound } from "next/navigation";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { getVideosByBand, formatDuration } from "@/data/videos";
// ... other imports

interface BandPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BandPage = async ({ params }: BandPageProps) => {
  const { id } = await params;
  const band = bandsData.find(b => b.id === id);
  
  if (!band) {
    notFound();
  }
  // ... rest of component
}
```

#### People页面 (`src/app/people/[id]/page.tsx`)
```typescript
import { notFound } from "next/navigation";
import { peopleData } from "@/data/people";
import { bandsData } from "@/data/bands";
// ... other imports

interface PersonPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PersonPage = async ({ params }: PersonPageProps) => {
  const { id } = await params;
  const person = peopleData.find(p => p.id === id);
  
  if (!person) {
    notFound();
  }
  // ... rest of component
}
```

## 🎯 修复要点

1. **移除 'use client'**: 动态路由页面应该是Server Components
2. **接口更新**: 将`params`类型从对象改为`Promise<对象>`
3. **函数签名**: 添加`async`关键字
4. **参数解包**: 使用`await params`来获取实际的参数对象
5. **保持功能**: 所有现有功能保持不变

## ✅ 测试结果

修复后的页面正常工作：

- ✅ `/bands/1` - 显示Band 1信息
- ✅ `/people/1` - 显示Alex Chen信息  
- ✅ `/videos/band1-001` - 显示视频播放页面

## 🔮 未来兼容性

这个修复确保了代码与Next.js 15的兼容性，并为未来的版本做好了准备。当Next.js完全移除对直接访问params属性的支持时，我们的代码将继续正常工作。

## 📚 重要概念

### Server Components vs Client Components

- **Server Components**: 默认类型，可以async，在服务器端渲染
- **Client Components**: 需要 `'use client'`，不能async，在客户端渲染
- **动态路由页面**: 应该默认是Server Components，除非需要客户端交互

### 何时使用 'use client'

- 需要useState, useEffect等React hooks
- 需要浏览器API
- 需要事件处理
- 需要客户端交互

### 何时保持Server Component

- 数据获取
- 数据库访问
- 文件系统访问
- 动态路由参数处理

## 📚 相关文档

- [Next.js 15 Migration Guide](https://nextjs.org/docs/upgrading)
- [Dynamic Route Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components) 