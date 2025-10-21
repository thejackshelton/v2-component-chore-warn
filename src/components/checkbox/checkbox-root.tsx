import {
  Slot,
  component$,
  useContextProvider,
  useId,
  useSignal,
} from "@qwik.dev/core";
import { type CheckboxContext, checkboxContextId } from "./checkbox-context";

/** Root component that provides context and state management for the checkbox */
export const CheckboxRoot = component$(() => {
  const checked = useSignal(false);
  const localId = useId();
  const triggerRef = useSignal<HTMLButtonElement>();
  const describedByIds = useSignal<string | undefined>(undefined);

  const context: CheckboxContext = {
    checked,
    localId,
    triggerRef,
    describedByIds,
  };

  useContextProvider(checkboxContextId, context);

  return (
    <div>
      <Slot />
    </div>
  );
});
