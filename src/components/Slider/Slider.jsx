import './slider.scss'
import { useState } from 'react'
import sliderItems from './sliderData'



function SliderArea(props) {
    const sliderWidth = 763
    const sliderHeight = 200
    const visibleItems = 1
    let itemWidth = sliderWidth / visibleItems
    const [offset, setOffset] = useState(0)
    const curentOffset = offset;

    const handleSwipeNext = () => {
        setOffset(()=>{
            return Math.max((curentOffset - itemWidth * visibleItems), -(itemWidth*(sliderItems.length-visibleItems)))
        });
    }

    const handleSwipePrew = () => {
        setOffset(()=>{
            return Math.min(curentOffset + itemWidth * visibleItems, 0)
        })
    }


    const items = sliderItems.map((elem) => {
        return (
            <div key={elem.id} className="slider__item" style={{ minWidth: itemWidth }}>
                <p className="slider__item-content">
                    {elem.content}
                </p>
            </div>
        );
    })
    return (
        <div className="slider">
            <button className="slider__nav-btn slider__nav-btn--prew" onClick={handleSwipePrew}>prew</button>
            <div className="slider__window" style={{ width: `${sliderWidth}px` }}>
                <div className="slider__track" style={{ height: `${sliderHeight}px`, transform: `translateX(${offset}px)` }}>
                    {items}
                </div>
            </div>
            <button className="slider__nav-btn slider__nav-btn--next" onClick={handleSwipeNext}>next</button>
        </div>
    )
}

export default SliderArea;