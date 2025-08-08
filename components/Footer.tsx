export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded"></div>
              <span className="font-medium">TechAgency</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-muted rounded border border-border"></div>
              <div className="w-8 h-8 bg-muted rounded border border-border"></div>
              <div className="w-8 h-8 bg-muted rounded border border-border"></div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TechAgency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}