import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import BlogSidebar from "@theme/BlogSidebar"
import { Navbar } from "@site/src/components/Layout"

// Swizzled from @docusaurus/theme-classic 2.4.1 BlogLayout. The only change:
// the site's own menu renders once, full width, above the blog column, so
// blog pages (posts, the list, tag pages) get the same menu as the rest of
// the site instead of one squeezed into the article column per post.
export default function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props
    const hasSidebar = sidebar && sidebar.items.length > 0
    return (
        <Layout {...layoutProps}>
            <Navbar />
            <div className="container margin-vert--lg">
                <div className="row">
                    <BlogSidebar sidebar={sidebar} />
                    <main
                        className={clsx("col", {
                            "col--7": hasSidebar,
                            "col--9 col--offset-1": !hasSidebar,
                        })}
                        itemScope
                        itemType="http://schema.org/Blog"
                    >
                        {children}
                    </main>
                    {toc && <div className="col col--2">{toc}</div>}
                </div>
            </div>
        </Layout>
    )
}
