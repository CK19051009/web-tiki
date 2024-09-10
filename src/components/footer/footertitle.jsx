export const FooterTitle = (props) => {
    const {title} = props;
    return (
        <>
            <div className="font-[500] text-[16px] text-dark" >
                {title}
            </div>
        </>
    )
}