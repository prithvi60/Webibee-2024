import Essentials from '@/components/Essentials'
import { digitalEssentials } from '@/libs/data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Essentials data={digitalEssentials} title='Digital' />
        </div>
    )
}

export default Page
