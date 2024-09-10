

export const SiderTitle = (props) =>{
    const {
        titleSider = ""
    } = props;

    return (
        <>
            <div className="mb-[14px] text-dark font-[500] text-[14px] ">{titleSider}</div>
        </>
    );
}