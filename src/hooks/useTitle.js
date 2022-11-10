import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-in:focus`;

    }, [title])
};

export default useTitle;