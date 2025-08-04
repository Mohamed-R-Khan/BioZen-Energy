import { Layout } from "../components/layout"
import { PageTransition } from "../components/page-transition"
import BioZenResearchLanding from "../biozen-research-landing"

export default function Page() {
  return (
    <Layout>
      <PageTransition>
        <BioZenResearchLanding />
      </PageTransition>
    </Layout>
  )
}
