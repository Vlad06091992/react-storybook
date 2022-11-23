import css from "./OnOff.module.css"

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            {props.on && <div className={css.flex}>
                <div className={css.rectangleGreen}></div>
                <div className={css.rectangleWhite}></div>
                <div className={css.roundGreen}></div>
            </div>}
            {!props.on && <div className={css.flex}>
                <span className={css.rectangleWhite}></span>
                <span className={css.rectangleRed}></span>
                <span className={css.roundRed}></span></div>}
        </div>
    )
}