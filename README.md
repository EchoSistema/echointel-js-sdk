# EchoIntel JavaScript SDK

[![npm version](https://img.shields.io/npm/v/echointel-sdk)](https://www.npmjs.com/package/echointel-sdk)
[![npm downloads](https://img.shields.io/npm/dt/echointel-sdk)](https://www.npmjs.com/package/echointel-sdk)
[![Node Version](https://img.shields.io/node/v/echointel-sdk)](https://www.npmjs.com/package/echointel-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-blue)](LICENSE)

A JavaScript/TypeScript SDK for the EchoIntel AI API - providing artificial intelligence capabilities for forecasting, customer segmentation, inventory optimization, and more.

**npm:** https://www.npmjs.com/package/echointel-sdk

**Features:**
- Zero runtime dependencies (uses native `fetch`)
- Full TypeScript support with complete type definitions
- Works in Browser, Node.js, and all major frameworks
- Automatic retry logic for transient failures
- Comprehensive error handling

## Installation

```bash
npm install echointel-sdk
```

```bash
yarn add echointel-sdk
```

```bash
pnpm add echointel-sdk
```

## Quick Start

```typescript
import { EchoIntelClient } from 'echointel-sdk'

const client = new EchoIntelClient({
  customerApiId: 'your-customer-id',
  secret: 'your-secret',
})

// Forecast revenue
const forecast = await client.forecastRevenue({
  // your data
})

// Customer segmentation
const segments = await client.customerSegmentation({
  // your data
})

// Churn prediction
const churnRisk = await client.churnRisk({
  // your data
})
```

## Configuration

```typescript
const client = new EchoIntelClient({
  // Required
  customerApiId: 'your-customer-id',
  secret: 'your-secret',

  // Optional
  apiUrl: 'https://ai.echosistema.live', // default
  adminSecret: 'your-admin-secret',       // for admin endpoints
  timeout: 30000,                          // request timeout in ms
  retry: {
    attempts: 3,                           // retry attempts
    delay: 100,                            // delay between retries in ms
  },
})
```

## Available Methods

### Forecasting
| Method | Description |
|--------|-------------|
| `forecastRevenue(data)` | Forecast revenue based on historical data |
| `forecastCost(data)` | Forecast cost based on historical data |
| `forecastCostImproved(data)` | Improved cost forecasting algorithm |
| `forecastUnits(data)` | Forecast units/quantity |

### Inventory
| Method | Description |
|--------|-------------|
| `inventoryOptimization(data)` | Get inventory optimization recommendations |
| `inventoryHistoryImproved(data)` | Analyze inventory history |

### Customer Analytics
| Method | Description |
|--------|-------------|
| `customerSegmentation(data)` | Segment customers using ML algorithms |
| `customerFeatures(data)` | Build customer feature vectors |
| `customerLoyalty(data)` | Calculate loyalty scores |
| `customerRfm(data)` | RFM (Recency, Frequency, Monetary) analysis |
| `customerClvFeatures(data)` | Build CLV feature vectors |
| `customerClvForecast(data)` | Forecast Customer Lifetime Value |

### Churn Analysis
| Method | Description |
|--------|-------------|
| `churnRisk(data)` | Predict churn probability |
| `churnLabel(data)` | Get churn labels for customers |

### NPS
| Method | Description |
|--------|-------------|
| `nps(data)` | Calculate Net Promoter Score |

### Propensity Modeling
| Method | Description |
|--------|-------------|
| `propensityBuyProduct(data)` | Propensity to buy a product |
| `propensityRespondCampaign(data)` | Propensity to respond to campaign |
| `propensityUpgradePlan(data)` | Propensity to upgrade plan |

### Recommendations
| Method | Description |
|--------|-------------|
| `recommendUserItems(data)` | Get personalized recommendations for user |
| `recommendSimilarItems(data)` | Get similar items |

### Cross-Sell & Upsell
| Method | Description |
|--------|-------------|
| `crossSellMatrix(data)` | Generate cross-sell opportunity matrix |
| `upsellSuggestions(data)` | Get upsell suggestions |

### Dynamic Pricing
| Method | Description |
|--------|-------------|
| `dynamicPricingRecommend(data)` | Get optimal pricing recommendations |

### Sentiment Analysis
| Method | Description |
|--------|-------------|
| `sentimentReport(data)` | Generate sentiment analysis report |
| `sentimentRealtime(data)` | Real-time sentiment analysis |

### Anomaly Detection
| Method | Description |
|--------|-------------|
| `anomalyTransactions(data)` | Detect anomalies in transactions |
| `anomalyAccounts(data)` | Detect anomalies in accounts |
| `anomalyGraph(data)` | Graph-based anomaly detection |

### Credit Risk
| Method | Description |
|--------|-------------|
| `creditRiskScore(data)` | Calculate credit risk score |
| `creditRiskExplain(data)` | Explain credit risk factors |

### Marketing Attribution
| Method | Description |
|--------|-------------|
| `channelAttribution(data)` | Multi-touch channel attribution |
| `upliftModel(data)` | Uplift modeling for campaigns |

### Customer Journey
| Method | Description |
|--------|-------------|
| `journeyMarkov(data)` | Markov chain journey analysis |
| `journeySequences(data)` | Common journey sequences |

### NLP & Text Processing
| Method | Description |
|--------|-------------|
| `nlpAnalysis(data)` | NLP analysis (Portuguese) |
| `nlpAnalysisEn(data)` | NLP analysis (English) |
| `sanitizeText(data)` | Text sanitization (Portuguese) |
| `sanitizeTextEn(data)` | Text sanitization (English) |

### Admin Operations
| Method | Description |
|--------|-------------|
| `createCustomer(data)` | Create a new customer |
| `listCustomers()` | List all customers |
| `getCustomer(id)` | Get customer by ID |
| `updateCustomer(id, data)` | Update customer |
| `deleteCustomer(id)` | Delete customer |

## Error Handling

```typescript
import {
  EchoIntelClient,
  EchoIntelError,
  ValidationError,
  AuthenticationError
} from 'echointel-sdk'

try {
  const result = await client.forecastRevenue(data)
} catch (error) {
  if (error instanceof AuthenticationError) {
    // Handle authentication error (401/403)
    console.error('Authentication failed:', error.message)
  } else if (error instanceof ValidationError) {
    // Handle validation error (422)
    console.error('Validation failed:', error.errors)
  } else if (error instanceof EchoIntelError) {
    // Handle other API errors
    console.error('API error:', error.message, error.statusCode)
  }
}
```

## Framework Integration

### Vue.js

```typescript
// composables/useEchoIntel.ts
import { EchoIntelClient } from 'echointel-sdk'

let client: EchoIntelClient | null = null

export function useEchoIntel() {
  if (!client) {
    client = new EchoIntelClient({
      customerApiId: import.meta.env.VITE_ECHOINTEL_CUSTOMER_API_ID,
      secret: import.meta.env.VITE_ECHOINTEL_SECRET,
    })
  }
  return client
}
```

### React

```typescript
// hooks/useEchoIntel.ts
import { useMemo } from 'react'
import { EchoIntelClient } from 'echointel-sdk'

export function useEchoIntel() {
  return useMemo(() => new EchoIntelClient({
    customerApiId: process.env.REACT_APP_ECHOINTEL_CUSTOMER_API_ID!,
    secret: process.env.REACT_APP_ECHOINTEL_SECRET!,
  }), [])
}
```

### Next.js

```typescript
// lib/echointel.ts
import { EchoIntelClient } from 'echointel-sdk'

export const echointel = new EchoIntelClient({
  customerApiId: process.env.NEXT_PUBLIC_ECHOINTEL_CUSTOMER_API_ID!,
  secret: process.env.NEXT_PUBLIC_ECHOINTEL_SECRET!,
})
```

### Svelte

```typescript
// stores/echointel.ts
import { EchoIntelClient } from 'echointel-sdk'

export const echointel = new EchoIntelClient({
  customerApiId: import.meta.env.VITE_ECHOINTEL_CUSTOMER_API_ID,
  secret: import.meta.env.VITE_ECHOINTEL_SECRET,
})
```

## Environment Variables

```env
# Node.js
ECHOINTEL_CUSTOMER_API_ID=your-customer-id
ECHOINTEL_SECRET=your-secret
ECHOINTEL_ADMIN_SECRET=your-admin-secret

# Vite (Vue/Svelte)
VITE_ECHOINTEL_CUSTOMER_API_ID=your-customer-id
VITE_ECHOINTEL_SECRET=your-secret

# React (CRA)
REACT_APP_ECHOINTEL_CUSTOMER_API_ID=your-customer-id
REACT_APP_ECHOINTEL_SECRET=your-secret

# Next.js
NEXT_PUBLIC_ECHOINTEL_CUSTOMER_API_ID=your-customer-id
NEXT_PUBLIC_ECHOINTEL_SECRET=your-secret
```

## TypeScript Support

This SDK is written in TypeScript and provides full type definitions:

```typescript
import type {
  // Configuration
  EchoIntelConfig,

  // Response types
  ForecastUnitsResponse,
  SegmentationResponse,
  ChurnRiskResponse,
  LoyaltyResponse,
  RfmResponse,
  PropensityResponse,
  RecResponse,
  PricingResponse,
  // ... and more
} from 'echointel-sdk'
```

## Requirements

- Node.js >= 18.0.0 (for native `fetch` support)
- Modern browsers with `fetch` API support

## Links

- [npm Package](https://www.npmjs.com/package/echointel-sdk)
- [GitHub Repository](https://github.com/EchoSistema/echointel-js-sdk)
- [Report Issues](https://github.com/EchoSistema/echointel-js-sdk/issues)

## License

Proprietary - EchoSistema S.A. See [LICENSE](LICENSE) for details.

---

Made with AI by [EchoSistema](https://echosistema.online)
