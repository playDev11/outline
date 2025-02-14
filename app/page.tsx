import { SecureNavigation } from './components/secure-navigation'
import { SecureMainContent } from './components/secure-main-content'
import { SecureFooterNav } from './components/secure-footer-nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F8]">
      <SecureNavigation />
      <SecureMainContent />
      <SecureFooterNav />
    </div>
  )
}
