import { SmoothScroll } from "./SmoothScroll"
import Navbar from "./Navbar"
import ScrollProgress from "./ScrollProgress"

export default function Layout({ children }) {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-background font-sans antialiased">
                <ScrollProgress />
                <Navbar />
                <main>{children}</main>
            </div>
        </SmoothScroll>
    )
}
