import {
  $,
  type PropsOf,
  Slot,
  component$,
  sync$,
  useContext,
} from "@qwik.dev/core";
import { Render } from "../render/render";
import { checkboxContextId } from "./checkbox-context";

export type PublicCheckboxControlProps = PropsOf<"button">;

/** Interactive trigger component that handles checkbox toggling */
export const CheckboxTrigger = component$(
  (props: PublicCheckboxControlProps) => {
    const context = useContext(checkboxContextId);
    const triggerId = `${context.localId}-trigger`;

    const handleClick$ = $(() => {
      if (context.checked.value === "mixed") {
        context.checked.value = true;
      } else {
        context.checked.value = !context.checked.value;
      }
    });

    const handleKeyDownSync$ = sync$((e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
    });

    return (
      <Render
        id={triggerId}
        internalRef={context.triggerRef}
        type="button"
        role="checkbox"
        fallback="button"
        aria-checked={`${context.checked.value}`}
        aria-describedby={context.describedByIds.value}
        aria-invalid={context.isError.value}
        disabled={context.isDisabled.value}
        onClick$={[handleClick$, props.onClick$]}
        onKeyDown$={[handleKeyDownSync$, props.onKeyDown$]}
        data-qds-checkbox-trigger
        {...props}
      >
        <Slot />
      </Render>
    );
  }
);
