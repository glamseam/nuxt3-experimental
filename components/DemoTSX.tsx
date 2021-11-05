// DemoTsx.tsx
import { defineComponent, PropType} from 'vue'

export const DemoTsx = defineComponent({
    props: {
        level: {
            type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
            default: 1
        },
        title: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const HeadingLevel = `h${props.level}`

        return () => (
            <HeadingLevel>
                {props.title}
            </HeadingLevel>
        )
    }
})
