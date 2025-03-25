import { Link } from "@inertiajs/react";
const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {prev && (
                <Link href={prev} className="bg-black btn-outline btn">
                    «
                </Link>
            )}

            <Link className="btn bg-black btn-outline">{current}</Link>

            {next && (
                <Link href={next} className="bg-black btn-outline btn">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
