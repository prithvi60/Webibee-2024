import Essentials from '@/components/Essentials'
import { creativeEssentials } from '@/libs/data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Essentials data={creativeEssentials} title='Creative' />
        </div>
    )
}

export default Page
