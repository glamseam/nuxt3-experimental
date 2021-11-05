<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    render() {
        return (
            <button
                class="class-name"
                type="button"
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        )
    }
})
</script>

<script lang="tsx" setup>
const props = defineProps<{
    label: string
}>()

const handleClick = () => {
    console.log('クリックしました!!')
}
</script>
