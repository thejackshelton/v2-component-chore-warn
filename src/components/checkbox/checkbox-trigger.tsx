import { type PropsOf, Slot, component$, useContext } from "@qwik.dev/core";
import { Render } from "../render/render";
import { checkboxContextId } from "./checkbox-context";

export type PublicCheckboxControlProps = PropsOf<"button">;

/** Interactive trigger component that handles checkbox toggling */
export const CheckboxTrigger = component$(
  (props: PublicCheckboxControlProps) => {
    const context = useContext(checkboxContextId);

    /**
     * Because the qrl is passed around the ref function here, we get a Component chore scheduled.
     *
     * But if we don't pass the qrl around, SSG builds seem to fail.
     */
    return (
      <Render
        // Render component manages ref merging for the consumer, so they can just pass a ref and it will be merged with the internal ref
        internalRef={context.triggerRef}
        type="button"
        role="checkbox"
        fallback="button"
        aria-checked={`${context.checked.value}`}
        // A read of an attribute that will be backpatched
        aria-describedby={context.describedByIds.value}
        {...props}
      >
        <Slot />
      </Render>
    );
  }
);
