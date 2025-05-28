### Section 1: Purpose and Vision

This document serves as a dynamic and evolving codex for initiating, navigating, and refining software projects with the aid of AI, specifically GitHub Copilot and LLM-based tools. It exists to distill personal development principles, coding philosophy, and collaborative protocols into a reusable and customizable workflow. At its core, the notebook reflects the ethos of growth through struggle, clarity through structure, and purpose through practice.

### Section 2: Development Process & Workflow

Our workflow is deliberately structured to balance disciplined planning with adaptive execution. It prioritizes thoughtful design, incremental progress, and continuous dialogue with AI tools. It includes:

1. **Project Planning**

   * Define the purpose, intended audience, and desired outcome of the project.
   * Identify constraints and philosophical considerations (e.g., accessibility, ethical use of data).

2. **Rubber Ducking**

   * Verbally or textually explore the idea in detail.
   * Identify unknowns, emotional expectations, or mental roadblocks.

3. **Pseudocode & Flow Planning**

   * Translate the idea into high-level logical steps.
   * Consider structure, flow, inputs/outputs, and data/state management.

4. **Checklist Creation**

   * Break pseudocode into actionable tasks or components.
   * Create a to-do list that aligns with file structures, React components, or feature groups.

5. **Implementation**

   * Write code iteratively using the checklist.
   * Use Copilot to assist in boilerplate or predictable code generation.
   * Regularly test, refactor, and refine during the process.

6. **Review & Testing**

   * Validate feature behavior and coherence.
   * Finalize code by checking for performance, accessibility, readability, and maintainability.

### Section 3: Technology Stack Defaults

* **JavaScript (ES6+), HTML5, CSS3**
* **React (with Tailwind CSS and shadcn/ui)**
* **Node + Express (ESM format)**
* **Markdown for documentation**
* **GitHub for version control**

Additional tools or languages may be incorporated, but all defaults serve as the minimal viable environment.

### Section 4: Coding Style and Practices

* Use `import/export` syntax (ESM) in all modules.
* Favor named exports for clarity and testing.
* Break large components into logical subcomponents.
* Prioritize readable variable names and consistent structure.
* Use Promises (`.then()`) for fetches unless otherwise needed.
* Write comments sparingly, but meaningfully—focus on *why*, not just *what*.

### Section 5: Accessibility and Inclusion

* Ensure semantic HTML usage.
* Use appropriate `aria` labels where needed.
* Style should be responsive by default and use readable font sizes.
* Avoid assumptions about user ability, device, or environment.

### Section 6: Mindset and Philosophy

* **“The work will teach you.”** Embrace imperfection during first passes.
* Treat bugs as opportunities to understand logic gaps.
* Progress is sacred, not perfection.
* AI is a collaborator, not a crutch.
* Time and care invested into design yields tenfold dividends.
* Prioritize code that is readable by humans before machines.

### Section 7: Prompting Behavior for Copilot & LLMs

LLMs respond best when:

* You are *specific* about the intent and structure of what you want.
* You reference the current phase you are in (planning, coding, testing).
* You define the *purpose* of a function before asking for it.
* You invite revision, refinement, or alternative implementations.

Use markdown or comments to outline what you want before invoking Copilot:

```js
// Purpose: Fetch list of users from API and display in card format
// Constraints: Use `.then()`, no async/await
```

You can also include emotional or philosophical context if relevant:

```js
// I’m tired today. Please help with the skeleton of this function so I can handle the details.
```

The AI should not dictate the flow—*you* are the captain. But it can be your navigator, your first mate, and your co-dreamer.

### Section 8: Collaboration and Guidance Preferences

When working with others (human or AI):

* Begin with *shared context* and clearly stated goals.
* Ask clarifying questions rather than making assumptions.
* Use visual aids (diagrams, markdown checklists, tree structures) liberally.
* Feedback should be constructive, and tied to either clarity, utility, or purpose.
* Always leave the codebase in a better place than you found it—clean up, label, and document.

---

This document shall evolve as projects evolve. We do not rush. We build deliberately, with heart, clarity, and quiet nobility.


<!-- 
NOTE: I’m not using React yet. Please do not include React in setup defaults. 
I'm learning it in school and will reintroduce it later.
-->

<!-- 
REMINDER: Use .then() on frontend fetches. 
Use async/await on backend (Express) operations.
-->


