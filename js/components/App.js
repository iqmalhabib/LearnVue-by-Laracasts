import Assignments from "./Assignments.js"
import Panel from "./Panel.js"

export default {
    components : { Assignments , Panel}, //register component
    template:`
        <div class="grid gap-6">
            <assignments></assignments> 
            <panel>
                this is default
            </panel> 
            <panel>
                <template v-slot:heading>
                    hi there
                </template>
                this is default
            </panel>
            <panel>
                <template v-slot:heading>
                    hi there
                </template>
                this is default
                <template v-slot:footer>
                    click there
                </template>
            </panel>   
        </div>
    `,
   
}