import { mount } from 'helloVue/HelloVueApp'
import React, { useRef, useEffect } from 'react'

export const HelloVue = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}