import InitColorSchemeScript from "@mui/material/InitColorSchemeScript"
import { Providers } from "@/components/Providers"
import { Header } from "@/components/header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <InitColorSchemeScript attribute="class" />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Header />
        <div style={{ flex: 1, position: "relative" }}>{children}</div>
      </div>
    </Providers>
  )
}
