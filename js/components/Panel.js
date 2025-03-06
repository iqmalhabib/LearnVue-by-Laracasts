export default{
    template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading"/>
            </h2>    
            <slot/>  

            <footer v-if="$slots.footer" class="border-t mt-4 pt-4 border-gray-600 text-sm">
                <slot name="footer"></slot>
            </footer>
        </div>
    `,

    props:{
        heading: String
    }
}