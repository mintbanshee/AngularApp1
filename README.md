# AngularApp1 — User Dashboard (Assignment 1)

An Angular application that demonstrates component-based architecture, shared state management, and SCSS styling.

## Features
- **User Card**
  - Displays profile picture, name, and age
  - Styled profile card with gradient “cover” header
- **User Bio**
  - Shows a short bio
  - Includes an “Edit Bio” button (UI ready / functionality based on assignment requirements)
- **User Status**
  - Shows online/offline status
  - Toggle button updates the status (via service)

## Tech Used
- Angular (standalone components)
- TypeScript
- SCSS (Sass)
- RxJS (BehaviorSubject) for shared state in a service

## Learning Objectives
- Creating standalone Angular components
- Sharing state using a service with RxJS BehaviorSubject
- Structuring a small Angular project
- Styling components using SCSS

## Project Structure
- `src/app/components/`
  - `user-card/`
  - `user-bio/`
  - `user-status/`
- `src/app/services/`
  - `user.service.ts`
- `public/assets/`

## UI Preview

### Day 1's Focus: Profile Image & Name Card

<img width="1388" height="557" alt="ImgCard" src="https://github.com/user-attachments/assets/c935c6a9-f0d5-494b-8236-677c3702d0c7" />
