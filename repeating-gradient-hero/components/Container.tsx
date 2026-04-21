import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const Container = ({ children, className }: { children: ReactNode, className: string }) => {
    return (
        <div className={cn(className)}>
            {children}
        </div>
    )
}

export default Container