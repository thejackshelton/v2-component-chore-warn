import type { DocumentHead } from "@qwik.dev/router";

import { Checkbox } from "~/components/checkbox";
import { component$, useSignal } from "@qwik.dev/core";

export default component$(() => {
  const isError = useSignal(true);

  const isRendered = useSignal(true);

  return (
    <>
      <Checkbox.Root>
        <Checkbox.Trigger class="size-10 bg-yellow-500 ui-checked:bg-red-500">
          <Checkbox.Indicator class="checkbox-indicator">
            Checked
          </Checkbox.Indicator>
        </Checkbox.Trigger>
        <Checkbox.Description>Description</Checkbox.Description>
        {isError.value && <Checkbox.Error>Error</Checkbox.Error>}
      </Checkbox.Root>
      <button onClick$={() => (isError.value = !isError.value)}>
        Toggle Error
      </button>
      <button onClick$={() => (isRendered.value = !isRendered.value)}>
        Checkbox Rendered
      </button>
    </>
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
