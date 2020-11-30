<script>
import { h } from "vue";

export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    return () =>
      h(
        "ul",
        {
          class: ["ui-list", props.horizontal && "ui-list--horizontal"],
        },
        ctx.slots.default().map((slot) => h("li", slot))
      );
  },
};
</script>

<style lang="scss">
@use "@/assets/styles/settings/_variables.scss";

.ui-list {
  margin: 0;
  padding: 0;
  list-style: none;

  &--horizontal {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
}
</style>
