import {Head} from "@inertiajs/react";

export default function Hello({ name }) {
    return (
        <div>
            <Head title={'asau'}/>
            { name }
            <p className={'font-bold text-5xl text-amber-500'}>cokk</p>
        </div>
    )
}
