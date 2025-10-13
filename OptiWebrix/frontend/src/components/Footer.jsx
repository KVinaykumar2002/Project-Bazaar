import { Link } from "react-router-dom"
import { SparklesPreview } from "./SparklesPreview"


export default function Footer() {
  return (
    <>
      {/* Sparkles Section */}
      
      
      {/* Traditional Footer */}
      <footer className="bg-background">
        <SparklesPreview />
      
       
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
              <div key={item} className="pb-6">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
            <Link to="/">
            Designed & Developed with ❤️ by Team OptiWebrix
            </Link>
          </p>
        </div>
      </footer>
    </>
  )
}

