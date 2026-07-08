# Clear Energy – 3 App Take Home

## Candidate

**Name:** Vankanavath Rahul

---

# Project Overview

This project demonstrates a React Native based multi-app architecture for Clear Energy.

The repository contains three applications:

```
apps/
├── customer
├── driver
└── admin-mobile
```

and a shared package

```
packages/
└── shared
```

The goal is to maximize code reuse by sharing

- TypeScript models
- API client
- Utility functions
- Reusable UI components

across all three applications.

---

# Technology Stack

- React Native
- Expo SDK 57
- TypeScript
- Axios
- TanStack React Query
- JSON Server

---

# Folder Structure

```
clear_energy_takehome/

apps/
    customer/
    driver/
    admin-mobile/

packages/
    shared/
        api/
        components/
        types/
        utils/

mock-api.json
README.md
```

---

# Features

## Customer App

- Displays Today's Orders
- Fetches orders from JSON Server
- Loading state
- Error state
- Empty state
- Order list

---

## Driver App

- Displays Today's Trips
- Trip list
- Loading state
- Error state
- Empty state

---

## Admin Mobile

- Displays Pending Actions
- Loading state
- Error state
- Empty state

---

# Shared Package

The shared package contains reusable code used across the three applications.

## Shared Types

- Order
- Trip
- PendingAction

## Shared API Client

- Axios based client
- Typed API methods
- Centralized network configuration

## Shared Utilities

- Indian currency formatter

## Shared Components

- OrderCard component

---

# Running the Backend

Install JSON Server

```bash
npm install -g json-server
```

Run backend

```bash
npx json-server --watch mock-api.json --host 0.0.0.0 --port 4000
```

Backend URL

```
http://localhost:4000
```

---

# Running the Customer App

```
cd apps/customer

npm install

npx expo start
```

---

# Running Driver App

```
cd apps/driver

npm install

npx expo start
```

---

# Running Admin App

```
cd apps/admin-mobile

npm install

npx expo start
```

---

# Design Decisions

This project follows a reusable architecture.

Instead of duplicating

- API code
- Type definitions
- Utilities
- UI components

the intention is to keep them inside the shared package.

This reduces maintenance cost and keeps the three applications consistent.

---

# Trade-offs

Due to the time constraint of the take-home assignment, the priority was to complete the core functionality and shared architecture.

Expo SDK 57 requires additional Metro/workspace configuration for consuming React Native UI components directly from a shared workspace package. Under the available time budget, the focus was on implementing the application logic and reusable structure first.

In a production implementation, the shared package would be fully consumed through npm workspaces with Expo's official monorepo configuration.

---

# Future Improvements

- Complete Expo workspace integration
- React Navigation
- Unit tests for all utilities
- Better reusable UI system
- Dark mode
- API retry support
- Offline caching
- Authentication
- Environment based API configuration

---

# AI Usage

AI tools used:

- ChatGPT

Used for:

- Architecture planning
- React Native guidance
- TypeScript interfaces
- API client generation
- Component structure
- Debugging support

All generated code was reviewed and modified before use.

---

# Time Spent

Approximately **3–4 hours** including:

- Project setup
- Workspace configuration
- UI implementation
- API integration
- Debugging
- Documentation

---

Thank you for reviewing my submission.
