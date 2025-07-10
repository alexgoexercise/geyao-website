'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its <style> tag a second time on the client,
// which can lead to hydration mismatches.
config.autoAddCss = false;

export default function FontAwesomeProvider() {
  return null; // This component only runs for side-effects
} 