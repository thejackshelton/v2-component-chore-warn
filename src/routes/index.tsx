import type { DocumentHead } from "@qwik.dev/router";

import { Checkbox } from "~/components/checkbox";
import { component$ } from "@qwik.dev/core";

export default component$(() => {
  // Checkbox.Trigger is the only component that uses the Render component for ref merging right now.
  return (
    <Checkbox.Root>
      <Checkbox.Trigger class="size-10 bg-yellow-500 ui-checked:bg-red-500" />
      <Checkbox.Error>Error</Checkbox.Error>
    </Checkbox.Root>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
