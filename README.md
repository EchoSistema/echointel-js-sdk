# EchoIntel SDK for JavaScript/TypeScript

Official SDK for integrating with the EchoIntel AI API. Works in both browser and Node.js environments.

## Installation

```bash
npm install echointel-sdk
# or
yarn add echointel-sdk
# or
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
- `forecastRevenue(data)` - Forecast revenue
- `forecastCost(data)` - Forecast cost
- `forecastCostImproved(data)` - Improved cost forecasting
- `forecastUnits(data)` - Forecast units

### Inventory
- `inventoryOptimization(data)` - Inventory optimization
- `inventoryHistoryImproved(data)` - Inventory history analysis

### Customer Analytics
- `customerSegmentation(data)` - Customer segmentation
- `customerFeatures(data)` - Build customer features
- `customerLoyalty(data)` - Loyalty scoring
- `customerRfm(data)` - RFM analysis
- `customerClvFeatures(data)` - CLV features
- `customerClvForecast(data)` - CLV forecasting

### Churn
- `churnRisk(data)` - Churn risk prediction
- `churnLabel(data)` - Churn labeling

### NPS
- `nps(data)` - NPS calculation

### Propensity
- `propensityBuyProduct(data)` - Propensity to buy
- `propensityRespondCampaign(data)` - Propensity to respond
- `propensityUpgradePlan(data)` - Propensity to upgrade

### Recommendations
- `recommendUserItems(data)` - User recommendations
- `recommendSimilarItems(data)` - Similar items

### Cross-Sell & Upsell
- `crossSellMatrix(data)` - Cross-sell matrix
- `upsellSuggestions(data)` - Upsell suggestions

### Pricing
- `dynamicPricingRecommend(data)` - Dynamic pricing

### Sentiment
- `sentimentReport(data)` - Sentiment report
- `sentimentRealtime(data)` - Realtime sentiment

### Anomaly Detection
- `anomalyTransactions(data)` - Transaction anomalies
- `anomalyAccounts(data)` - Account anomalies
- `anomalyGraph(data)` - Graph-based anomalies

### Credit Risk
- `creditRiskScore(data)` - Credit risk scoring
- `creditRiskExplain(data)` - Credit risk explanation

### Attribution
- `channelAttribution(data)` - Channel attribution
- `upliftModel(data)` - Uplift modeling

### Journey
- `journeyMarkov(data)` - Markov journey analysis
- `journeySequences(data)` - Journey sequences

### NLP
- `nlpAnalysis(data)` - NLP analysis (Portuguese)
- `nlpAnalysisEn(data)` - NLP analysis (English)
- `sanitizeText(data)` - Text sanitization

### Admin
- `createCustomer(data)` - Create customer
- `listCustomers()` - List customers
- `getCustomer(id)` - Get customer
- `updateCustomer(id, data)` - Update customer
- `deleteCustomer(id)` - Delete customer

## Error Handling

```typescript
import { EchoIntelClient, EchoIntelError, ValidationError, AuthenticationError } from 'echointel-sdk'

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

## Environment Variables

```env
# Node.js
ECHOINTEL_API_URL=https://ai.echosistema.live
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

This SDK is written in TypeScript and provides full type definitions. All response types are exported:

```typescript
import type {
  ForecastUnitsResponse,
  SegmentationResponse,
  ChurnRiskResponse,
  // ... and more
} from 'echointel-sdk'
```

## License

Proprietary - EchoSistema S.A. See [LICENSE](LICENSE) for details.
