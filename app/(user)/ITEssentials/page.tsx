import Essentials from '@/components/Essentials'
import { ITEssentials } from '@/libs/data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Essentials data={ITEssentials} title='IT' />
        </div>
    )
}

export default Page
