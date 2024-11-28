import style from "./pageLoader.module.css"
const PageLoader = () => {
    return (
        <div className={style.loader_wrapper}>
            <div className={style.loader}></div>
        </div>
    )
}

export default PageLoader