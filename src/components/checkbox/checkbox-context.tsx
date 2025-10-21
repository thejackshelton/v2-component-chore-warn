import { type Signal, createContextId } from "@qwik.dev/core";

export const checkboxContextId = createContextId<CheckboxContext>(
  "qds-checkbox-context"
);

export type CheckboxContext = {
  checked: Signal<boolean | "mixed">;
  localId: string;
  triggerRef: Signal<HTMLButtonElement | undefined>;
  describedByIds: Signal<string | undefined>;
};
