import { Slot, component$, useContext, useTask$ } from "@qwik.dev/core";
import { checkboxContextId } from "./checkbox-context";

/** A component that displays error messages for a checkbox */
export const CheckboxError = component$(() => {
  const context = useContext(checkboxContextId);
  const errorId = `${context.localId}-error`;

  useTask$(() => {
    context.describedByIds.value = errorId;
  });

  return (
    <div>
      <Slot />
    </div>
  );
});
