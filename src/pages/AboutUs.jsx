import {Link} from "react-router";
import {
  ArrowRight,
  HeartHandshake,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/common/Container";

export default function AboutPage() {
  return (
    <main className="border-t border-border dark:border-border/20 py-8 md:py-16 overflow-x-clip">
      <Container>
        <section className="relative">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#c5172e]/10 blur-[90px]" />
          </div>

          <div>
            <div className="mb-6">
              <Badge
                className="bg-[#c5172e] hover:bg-[#a91428] text-white border-transparent rounded-full"
              >
                About prodwise
              </Badge>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl text-dark">
              {"Ask smarter. Recommend better."}
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              prodwise is a community where people ask thoughtful questions
              about products and get helpful, human recommendations from others
              who&apos;ve tried them. Minimal noise. Maximum signal.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="bg-[#c5172e] hover:bg-[#a91428] text-white"
              >
                <Link to="/login">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                to="/"
                className="text-sm font-medium text-[#c5172e] hover:underline"
              >
                Learn more on the homepage
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-dark">
              What we do
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              We help you make confident purchase decisions by combining real
              questions with real experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-muted/50 dark:bg-background dark:border-muted/10">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#c5172e]/10">
                  <Search className="h-5 w-5 text-[#c5172e]" />
                </div>
                <CardTitle className={'text-dark'}>Ask</CardTitle>
                <CardDescription>
                  Post a specific product question with context and constraints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get answers tailored to your needs, not generic reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted/50 dark:bg-background dark:border-muted/10">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#c5172e]/10">
                  <HeartHandshake className="h-5 w-5 text-[#c5172e]" />
                </div>
                <CardTitle className={'text-dark'}>Recommend</CardTitle>
                <CardDescription>
                  Share products you genuinely trust and why they fit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Helpful comparisons and trade‑offs over hype.
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted/50 dark:bg-background dark:border-muted/10">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#c5172e]/10">
                  <Sparkles className="h-5 w-5 text-[#c5172e]" />
                </div>
                <CardTitle className={'text-dark'}>Decide</CardTitle>
                <CardDescription>
                  Summaries highlight the best options for your criteria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Make decisions faster with concise, community‑backed insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="pb-8 sm:pb-12">
          <div className="grid gap-4 rounded-xl border border-border bg-background dark:border-border/20 p-6 sm:grid-cols-3">
            <Stat label="Questions asked" value="1,200+" />
            <Stat label="Recommendations shared" value="5,800+" />
            <Stat label="Response satisfaction" value="96%" />
          </div>
        </section>
        <section className="py-12 sm:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our values
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Minimalism, transparency, and community care guide how we build
              prodwise.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Value
              icon={<MessageSquare className="h-5 w-5 text-[#c5172e]" />}
              title="Clarity over noise"
              desc="Focused threads and structured prompts keep discussions crisp and actionable."
            />
            <Value
              icon={<ShieldCheck className="h-5 w-5 text-[#c5172e]" />}
              title="Trust by default"
              desc="Context, disclosures, and community moderation reduce bias and spam."
            />
            <Value
              icon={<Users className="h-5 w-5 text-[#c5172e]" />}
              title="Community first"
              desc="We design for contributors and seekers—simple, respectful, and fair."
            />
          </div>
        </section>

        <section className="pb-20">
          <Card className="border-border bg-white dark:bg-border/10 dark:border-border/20">
            <CardHeader className="gap-2 sm:flex sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl sm:text-2xl text-dark">
                  Join prodwise
                </CardTitle>
                <CardDescription>
                  Create an account to ask your first question or recommend a
                  product you love.
                </CardDescription>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button
                  asChild
                  className="bg-[#c5172e] hover:bg-[#a91428] text-white"
                >
                  <Link to="/login">
                    Log in / Sign up
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </Container>
    </main>
  );
}

function Stat({ label = "Label", value = "0" }) {
  return (
    <div className="rounded-lg border border-border dark:border-border/20 bg-white dark:bg-border/10 p-4">
      <div className="text-2xl font-semibold tracking-tight text-dark">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Value({
  icon = <Sparkles className="h-5 w-5 text-[#c5172e]" />,
  title = "Title",
  desc = "Description",
}) {
  return (
    <Card className="border-muted/50 bg-white dark:bg-border/20">
      <CardHeader className="space-y-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#c5172e]/10">
          {icon}
        </div>
        <CardTitle className="text-dark">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}
