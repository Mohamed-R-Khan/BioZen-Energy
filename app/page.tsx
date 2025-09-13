import { Layout } from "@/components/layout"
import { PageTransition } from "@/components/page-transition"
import BioZenComprehensiveLanding from "@/biozen-comprehensive-landing"

export default function HomePage() {
  return (
    <Layout>
      <PageTransition>
        <BioZenComprehensiveLanding />
      </PageTransition>
    </Layout>
  )
}
