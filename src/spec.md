# Specification

## Summary
**Goal:** Update the sticky header emblem to use the newly uploaded emblem image while keeping the advisor text and call CTA unchanged.

**Planned changes:**
- Replace the current sticky header emblem graphic with the uploaded emblem artwork from `download-1.jpg`, ensuring it preserves aspect ratio and fits the existing header height on mobile and desktop.
- Create and add a clean, web-optimized static emblem asset under `frontend/public/assets/` (e.g., PNG) and update the header component to reference this new `/assets/...` path.
- Set accurate English alt text for the header emblem image.

**User-visible outcome:** The sticky top bar shows the new emblem artwork cleanly, while “Arya Vineeth”, “TATA AIG Advisor”, and the call button (tel:9495670101) remain unchanged.
