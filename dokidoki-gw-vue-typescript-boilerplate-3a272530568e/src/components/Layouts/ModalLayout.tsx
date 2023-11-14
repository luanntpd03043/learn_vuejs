import { DialogSizeEnum } from 'enums/app';

export default defineComponent({
  name: 'ModalLayout',
  props: {
    onClose: {
      type: Function,
    },
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<DialogSizeEnum>,
      default: DialogSizeEnum.Medium,
      validator: (value: DialogSizeEnum) => {
        return [
          DialogSizeEnum.Small,
          DialogSizeEnum.Medium,
          DialogSizeEnum.Large,
        ].includes(value);
      },
    },
    destroyOnClose: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots, attrs }) {
    const { onClose, className, destroyOnClose, title, size } = props;

    return (): JSX.Element => (
      <el-dialog
        class={classNames({
          [className]: true,
          [`el-dialog--${size}`]: true,
        })}
        before-close={onClose}
        destroy-on-close={destroyOnClose}
        showClose={false}
        align-center
        {...attrs}
        v-slots={{
          header: () => (
            <div class="el-dialog__header-content">
              <span class="el-dialog__title">{title}</span>
              <font-icon
                name="remove-circle"
                onClick={onClose}
                color="shuttle-gray"
                cursor
              />
            </div>
          ),
          footer: slots.footer && slots.footer(),
        }}
      >
        {slots.default()}
      </el-dialog>
    );
  },
});
