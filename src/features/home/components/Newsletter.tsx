import useResizer from "../../../hooks/useResizer.ts";
import NewsletterDefault from "./NewsletterDefault.tsx";
import NewsletterMobile from "./NewsletterMobile.tsx";

function Newsletter() {
    const { size: mobile } = useResizer(1280);

    return !mobile ? <NewsletterDefault /> : <NewsletterMobile />;
}

export default Newsletter;