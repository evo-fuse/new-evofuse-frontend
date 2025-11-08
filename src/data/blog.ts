import blog1 from '@assets/blog/1.png'
import blog2 from '@assets/blog/2.png'
import blog3 from '@assets/blog/3.png'
import blog4 from '@assets/blog/4.png'
import blog5 from '@assets/blog/5.png'
import blog6 from '@assets/blog/6.png'

export type BlogPost = {
  slug: string
  title: string
  imageSrc: string
  variant: 'light' | 'dark'
  category: 'game' | 'crypto' | 'server' | 'new'
  author: string
  postedDate: string
  readingTime: string
  dateValue: Date
  content: Array<{ heading?: string; paragraph?: string }>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'earn-crypto-playing-games',
    title: 'How to Earn Crypto via EvoFuse2048 (and Become the Hero of Your Own Tile Story)',
    imageSrc: blog1,
    variant: 'light',
    category: 'game',
    author: 'John Doe',
    postedDate: 'Oct 15, 2025',
    readingTime: '5 min read',
    dateValue: new Date('2026-01-15'),
    content: [
      { paragraph: 'Welcome to EvoFuse2048 — the only game where merging tiles not only gives you that sweet sweet 2048 dopamine hit, but also real crypto rewards. Yes. Real. Blockchain. Tokens. 💰' },
      { paragraph: 'Let me show you how sliding some digital numbers around can actually pad your crypto wallet. And don\'t worry — no rugpulls, no scammy pop-ups, and no ads telling you that you\'ve won an iPhone 12.' },
      { heading: 'What Even Is EvoFuse2048?' },
      { paragraph: 'Take the classic game 2048 (remember that grid-based brain-melter from 2014?), inject it with themed tile evolution, give it a bunch of power items, and then slap a Fuse blockchain reward system on top. Boom. That\'s EvoFuse2048.' },
      { paragraph: 'Oh, and did I mention the token? It\'s called DWAT. You want it. You\'ll need it. You\'ll probably shout its name in your sleep after a 4096 merge.' },
      { heading: 'How Does It Work?' },
      { paragraph: 'You play. You slide tiles. You get to 2048 (or beyond). You earn DWAT tokens. You spend those DWAT tokens on more cool stuff in-game. Repeat. Get addicted. Brag to your friends. Start a cult. (optional)' },
      { heading: 'The Evolution Twist' },
      { paragraph: 'You\'re not just merging numbers like some soulless puzzle robot. EvoFuse2048 has themes. Want to merge the history of the world? Merge your love story from "Awkward First Date" to "Happily Ever After"? Or how about "Judy Hopps\' Evolution from Carrot Farmer to Badass Cop"?' },
      { paragraph: 'Yes, all of that is here. Each tile is a step in your own weird little evolution journey. It\'s like timeline storytelling... if timelines were square and moved around.' },
      { heading: 'Items That Make You Feel Like a God' },
      { paragraph: 'Let\'s say your game board is looking tragic. One wrong swipe and you\'re doomed. EvoFuse hands you the tools of the Tile Gods:' },
      { paragraph: 'Hammer: Smash that annoying tile out of existence' },
      { paragraph: 'Upgrade: Double a tile\'s value and watch chaos unfold' },
      { paragraph: 'Power-Up: Temporarily boost your score rate (cue dramatic background music)' },
      { paragraph: 'Grid Expansion: Play on bigger boards like the true puzzle boss you are' },
      { heading: 'Show Me the DWAT' },
      { paragraph: 'Alright, alright — let\'s talk crypto. Here\'s the formula (don\'t worry, it\'s not math class):' },
      { paragraph: 'If your max tile is 2048 or higher: DWAT = (Current Score * 0.01) + (Max Tile * 0.1)' },
      { paragraph: 'Translation: Be good at the game. Hit 2048 or higher. Get DWAT. Use DWAT to buy more themes, items, and flex on plebs stuck at 512.' },
      { paragraph: 'Yes, you\'re literally getting paid to be good at a game. Mom said video games would never pay off — look at you now.' },
      { heading: 'Hard core Players Get Special Sauce' },
      { paragraph: 'The EvoFuse2048 app version has extra goodies: Save your gameplay history in .json format (for nerds and strategists), share and import game replays (flex mode: ON), and enter the world of crypto betting mini-games (starting with SportBingo).' },
      { paragraph: 'This isn\'t just a puzzle game anymore. It\'s a whole ecosystem. A lifestyle. Possibly a religion (okay maybe not, but still).' },
      { heading: 'In Conclusion: Merge, Earn, Repeat' },
      { paragraph: 'EvoFuse2048 isn\'t just a 2048 clone. It\'s a portal to crypto earnings, self-expression, and strategic flexing. Play casually? Cool, earn a little DWAT. Play like a beast? Farm DWAT like you\'re staking in DeFi. Want custom themes? Go wild. Make one about your cat\'s life if you want. Want to turn your gaming skills into blockchain gains? This is it.' },
      { paragraph: 'So look at PC, fire up the grid, and start merging like your wallet depends on it — because in EvoFuse2048, it kinda does.' }
    ]
  },
  {
    slug: 'othello-crypto-kings',
    title: 'Champion Coin Utility & Roadmap — EvoFuse\'s Token of Glory',
    imageSrc: blog2,
    variant: 'dark',
    category: 'crypto',
    author: 'Jane Smith',
    postedDate: 'Oct 12, 2025',
    readingTime: '7 min read',
    dateValue: new Date('2026-01-12'),
    content: [
      { paragraph: '"It\'s dangerous to go alone! Take this DWAT."' },
      { paragraph: 'Welcome to the EvoFuse universe, where tiles merge, tokens fly, and only the chosen ones rise to the top with their Champion Coins (aka the mighty $DWAT). If you thought this was just another 2048 clone... well, think again, padawan. This is EvoFuse 2048 — where every swipe is a step closer to glory, item-fueled chaos, and blockchain-fueled victory.' },
      { paragraph: 'And today? We unveil the true power of DWAT and the epic roadmap that lies ahead.' },
      { heading: 'What Even Is DWAT?' },
      { paragraph: 'DWAT stands for: "Don\'t Waste A Tile" (Okay okay... it actually stands for "Dynamically Weighted Asset Token"... but ours is cooler, right?)' },
      { paragraph: 'DWAT is the official token of the EvoFuse Game Ecosystem — a universe where gameplay earns you rewards, and rewards unlock madness. It\'s like Mario coins, but they\'re on the blockchain. And yes — you can actually use them.' },
      { heading: 'How to Earn DWAT (a.k.a. "Champion Coin Grind")' },
      { paragraph: 'You can\'t just show up and expect DWAT to rain from the sky like it\'s item drops in Diablo. You gotta fuse those tiles like a pro.' },
      { paragraph: 'Here\'s how you earn your Champion Coins: If you\'ve hit the legendary 2048 tile (and you\'re not playing with your eyes closed), you qualify for DWAT drops:' },
      { paragraph: 'DWAT = (Current Score × 0.01) + (Highest Tile × 0.1)' },
      { paragraph: 'That\'s right — only the strong get paid. The rest? Try again. (Insert Dark Souls "You Died" screen here.)' },
      { heading: 'What You Can Do With DWAT (And Yes, It\'s Awesome)' },
      { paragraph: 'Let\'s break down the DWAT Utility Arsenal:' },
      { heading: '1. Buy Game-Changing Items' },
      { paragraph: 'Hammer — Delete that cursed "2" tile ruining your board' },
      { paragraph: 'Power-Up — Boost your score multiplier like you\'re Goku charging a Spirit Bomb' },
      { paragraph: 'Upgrade — Instantly double a tile\'s value. It\'s like cheating, but legal.' },
      { heading: '2. Expand Your Grid' },
      { paragraph: 'Tired of the peasant 4x4 grid? Go big. Go Galaxy Brain Mode. DWAT lets you unlock larger battlefields for more epic fusions.' },
      { heading: '3. Unlock Custom Themes' },
      { paragraph: 'Bored of number tiles? How about World History, Kung Fu Panda, or Judy Hopps: Tile Cop? DWAT gives you VIP access to thematic tile evolution, where every merge tells a story.' },
      { heading: '4. Craft Your Own Tile Saga' },
      { paragraph: 'With DWAT, you can create a personal theme — your love story, your pet\'s glow-up, or even the evolution of your ramen addiction. Your tile. Your lore.' },
      { heading: 'DWAT Roadmap — Or How We Plan to Conquer the Multiverse' },
      { heading: 'Q4 2025 — We Are Here 🐣' },
      { paragraph: 'Web + App game released, Core DWAT economy running, Token rewards based on score, SportBingo (crypto slot-bet fusion) LIVE, JSON game history export (nerds rejoice!)' },
      { heading: 'Q1 2026 — Into the Grid' },
      { paragraph: 'PvP Leaderboards with DWAT prizes, Season Pass system (with bonus DWAT pools!), DWAT staking to unlock cosmetic effects (sparkly tiles? glowing Judy Hopps? yes.)' },
      { heading: 'Q2 2026 — Game-Fi Goes Boom' },
      { paragraph: 'Fuse Casino: Token-based mini-games, Multi-theme merge battles (e.g. History vs Halloween), DWAT liquidity pools & LP rewards' },
      { heading: 'Q3 2026 — EvoMetaverse Beta' },
      { paragraph: 'Cross-game DWAT integration, EvoAvatar NFTs usable across EvoFuse games, FuseVR 2048 — because why not?' },
      { heading: 'The Endgame: DWAT Isn\'t Just A Coin. It\'s A Lifestyle.' },
      { paragraph: 'The day will come when kids say: "Back in my day, we earned DWAT by grinding out 2048 like real gamers." And we\'ll nod, silently, proudly, DWAT in our wallets, glint in our eyes, hammer in our hands.' },
      { paragraph: 'DWAT isn\'t just a Champion Coin. It\'s the Proof of Gamerhood. The Pixel of Progress. The Token of Tile Titans.' },
      { paragraph: 'So go forth, tile warriors. Swipe. Merge. Earn. Dominate. And remember: Every great legend was once just a "2" on a grid…' }
    ]
  },
  {
    slug: 'chameleon-coin-utility-roadmap',
    title: 'The Road to Millionaire in EvoFuse2048',
    imageSrc: blog3,
    variant: 'dark',
    category: 'crypto',
    author: 'Mike Johnson',
    postedDate: 'Oct 10, 2025',
    readingTime: '6 min read',
    dateValue: new Date('2026-01-10'),
    content: [
      { paragraph: '— How I accidentally became rich by smashing tiles and chasing Judy Hopps' },
      { paragraph: 'It all started with a simple goal: beat 2048. You know, that harmless little puzzle game from 2014 where you slide number tiles and feel like Einstein every time two 2\'s become a 4.' },
      { paragraph: 'But then came EvoFuse2048 — and everything changed.' },
      { paragraph: 'This wasn\'t just 2048. This was 2048 on steroids, with blockchain power, DWAT tokens, laser hammers, exploding bunnies, and something called SportBingo. I didn\'t know whether I was playing a game, starring in an animated evolution documentary, or mining for digital gold.' },
      { heading: 'It Begins: Two tiles walk into a grid...' },
      { paragraph: 'At first, I was skeptical. "Just another crypto game," I muttered, sliding my first 2-tile into another. DING! A soft glow. A warm "4" appeared. And then the screen whispered: "You\'re not just merging tiles… you\'re evolving."' },
      { paragraph: 'It was World History mode. Before I knew it, my board had evolved from Caveman to Caesar to Samurai to Elon Musk with a hoverboard. (Okay, maybe I hallucinated that last one.)' },
      { heading: 'I Got 99 Problems and That One Tile is All of Them' },
      { paragraph: 'Then came items. The Hammer? It\'s not just an item. It\'s therapy. That one stupid tile ruining your combo? Boom. Gone. The Upgrade? Doubled my tile. Doubled my hope. Doubled my dopamine. The Power-Up? Basically turned me into Thanos for 10 moves.' },
      { paragraph: 'And the Grid Expansion? Holy shift. Going from 4x4 to 5x5 felt like upgrading from a Nokia to a spaceship.' },
      { heading: 'DWAT In The World Just Happened?' },
      { paragraph: 'Then I hit it. 2048 tile. Suddenly I was eligible for DWAT tokens — EvoFuse\'s in-game currency. The formula was: DWAT = (score * 0.01) + (max tile * 0.1)' },
      { paragraph: 'It felt like math class, but with money at the end. Before I knew it, I had earned 87.4 DWAT. Which, at that moment, was worth… maybe nothing. Maybe everything. But I was hooked.' },
      { paragraph: 'DWAT became my new religion. I played with a purpose. I saw tiles not as numbers, but as financial opportunities. I started dreaming in 2\'s and 4\'s. My dog\'s name became "Eight."' },
      { heading: 'Judy Hopps and Custom Love Stories' },
      { paragraph: 'Now here\'s where EvoFuse2048 gets weird. Themes. You\'re not just playing with numbers — you\'re playing through evolutionary storylines. I chose Judy Hopps — because who doesn\'t want to watch an adorable bunny climb the socio-political food chain via tile merges?' },
      { paragraph: 'Then I discovered you can make custom themes — your love life, your resume, your failed startup ideas. Imagine merging from "First Date" to "Ghosted" to "Marriage Counseling" — and getting DWAT along the way.' },
      { heading: 'And Then Came the App…' },
      { paragraph: 'Oh, you thought I was done? Nope. The EvoFuse App lets you: Record your plays (in .json — because nothing screams gamer like a shareable spreadsheet), Replay your best runs (and flex on Discord), Import others\' games and study them like game-tape from the NBA, Bet with DWAT in SportBingo, a game that feels like your uncle\'s slot machine got married to ESPN' },
      { paragraph: 'I started as a casual player. I became an evolution historian. Then a DWAT investor. Now? I\'m basically the Warren Buffet of 2048.' },
      { heading: 'Final Thoughts: The Millionaire Mindset' },
      { paragraph: 'They said crypto was dead. They said 2048 was old news. They never saw EvoFuse2048 coming.' },
      { paragraph: 'Do I have a million dollars yet? No. But I have 1,237 DWAT, a grid expansion, and Judy Hopps at tile 1024. And in this ecosystem, that\'s basically Lambo-ready.' },
      { paragraph: 'So if you want in on this wild, token-fueled, bunny-chasing, grid-breaking ride… Join me on The Road to Millionaire.' },
      { paragraph: 'And remember: Merge wisely. Spin SportBingo. And for DWAT\'s sake, don\'t let that 2 tile sit in the corner.' },
      { paragraph: 'Play EvoFuse2048. Own the evolution. Get DWAT\'d.' }
    ]
  },
  {
    slug: 'market-trends-analytics',
    title: 'Market Trends & Analytics',
    imageSrc: blog4,
    variant: 'dark',
    category: 'new',
    author: 'Sarah Williams',
    postedDate: 'Oct 8, 2025',
    readingTime: '4 min read',
    dateValue: new Date('2026-01-08'),
    content: [
      { paragraph: 'The Web3 gaming sector is experiencing unprecedented growth, with market analysts predicting the industry will reach $65 billion by 2027. Understanding these trends is crucial for players, developers, and investors looking to navigate this rapidly evolving landscape. EvoFuse stands at the forefront of these developments, implementing best practices that align with successful market patterns.' },
      { heading: 'The Shift Toward Sustainable Play-to-Earn Models' },
      { paragraph: 'Early play-to-earn games faced criticism for unsustainable tokenomics that led to inflation and eventual collapse. The industry has learned from these mistakes, and modern platforms like EvoFuse implement carefully designed reward structures that balance player incentives with long-term economic stability.' },
      { paragraph: 'Key trends include: reward caps based on actual gameplay value, multi-token systems that separate utility from governance, and mechanisms that encourage token circulation rather than hoarding. EvoFuse incorporates all these principles, creating a model that benefits players while ensuring platform longevity.' },
      { heading: 'User Experience: The Critical Differentiator' },
      { paragraph: 'Analytics consistently show that Web3 games with superior user experiences significantly outperform those that prioritize blockchain features over gameplay quality. Players want seamless experiences—games that feel polished and fun, with blockchain integration that enhances rather than complicates the experience.' },
      { paragraph: 'EvoFuse prioritizes user experience through intuitive interfaces, fast transaction processing on the Fuse Network, and gameplay that stands on its own merit. The blockchain elements enhance the experience rather than serving as the primary draw, which aligns with successful market patterns.' },
      { heading: 'Lowering Barriers to Entry' },
      { paragraph: 'One of the most significant trends is the reduction of friction for new players. Early Web3 games required extensive blockchain knowledge, multiple wallet setups, and complex onboarding processes. Modern platforms recognize that mass adoption requires simplicity.' },
      { paragraph: 'EvoFuse addresses this through streamlined wallet connections, optional blockchain features for casual players, and educational resources that help newcomers understand Web3 concepts gradually. This approach has proven successful in attracting both crypto-native and traditional gamers.' },
      { heading: 'Community-Driven Growth' },
      { paragraph: 'Successful Web3 gaming platforms recognize that community is their greatest asset. Analytics show that games with active, engaged communities experience better retention rates, higher player lifetime value, and more sustainable token economies.' },
      { paragraph: 'EvoFuse fosters community through leaderboards, tournaments, social features, and governance participation. Players aren\'t just consumers—they\'re stakeholders with a voice in platform development. This community-centric approach aligns with the most successful projects in the space.' },
      { heading: 'Looking Ahead: What the Data Suggests' },
      { paragraph: 'Market research indicates several emerging trends: increased focus on mobile gaming, integration with traditional gaming platforms, and the rise of hybrid models that combine free-to-play mechanics with optional Web3 features. EvoFuse is positioned to capitalize on these trends, with development priorities that align with projected market directions.' },
      { paragraph: 'The future of Web3 gaming looks bright, with sustainable models, improved user experiences, and growing mainstream acceptance. Platforms that adapt to these trends while maintaining core blockchain benefits will lead the next wave of industry growth.' }
    ]
  },
  {
    slug: 'launch-updates-roadmap',
    title: 'Launch Updates & Roadmap',
    imageSrc: blog5,
    variant: 'light',
    category: 'server',
    author: 'David Brown',
    postedDate: 'Oct 5, 2025',
    readingTime: '6 min read',
    dateValue: new Date('2026-01-05'),
    content: [
      { paragraph: 'EvoFuse has come a long way since its initial launch, and we\'re excited to share our progress and upcoming developments. This comprehensive update covers recent improvements, current development priorities, and our roadmap for the coming quarters.' },
      { heading: 'Recent Launch Achievements' },
      { paragraph: 'Since our public launch, EvoFuse has achieved several significant milestones. We\'ve onboarded over 10,000 active players, processed more than 50,000 game sessions, and distributed over 1 million DWAT tokens in rewards. The platform has maintained 99.9% uptime, demonstrating the reliability of our infrastructure built on the Fuse Network.' },
      { paragraph: 'Community engagement has exceeded expectations, with active leaderboards, competitive tournaments, and a vibrant social ecosystem. Player feedback has been overwhelmingly positive, particularly regarding the seamless integration of blockchain features with traditional gaming experiences.' },
      { heading: 'Q1 2026: Current Development Focus' },
      { paragraph: 'Our current development sprint focuses on scalability and performance optimization. We\'re implementing advanced caching systems, optimizing database queries, and enhancing our matchmaking algorithms to support larger concurrent player bases. These improvements will ensure smooth experiences even as our community grows.' },
      { paragraph: 'Additionally, we\'re rolling out enhanced analytics dashboards for players, allowing you to track your performance metrics, earning history, and achievement progress in greater detail. This transparency helps players understand their earning potential and optimize their gameplay strategies.' },
      { heading: 'Q2 2026: New Games and Features' },
      { paragraph: 'The second quarter will see the introduction of two new games to the EvoFuse platform: Flappy Bird Crypto Flight and Carcassonne Strategic Build. Each game brings unique mechanics and reward structures, expanding the variety of play-to-earn opportunities available to our community.' },
      { paragraph: 'We\'re also launching a comprehensive theme marketplace where players can create, purchase, and trade custom game themes. This marketplace will support NFT-based themes, allowing creators to monetize their designs while giving players access to unique visual experiences.' },
      { heading: 'Q3 2026: Advanced Features and Integrations' },
      { paragraph: 'The third quarter introduces several advanced features, including cross-game achievements, unified leaderboards, and seasonal events that span multiple games. We\'re also implementing social features like friend systems, private matches, and team-based competitions.' },
      { paragraph: 'From a technical perspective, Q3 will see the launch of our mobile applications for iOS and Android. These native apps will provide optimized experiences for mobile players while maintaining full feature parity with the web platform.' },
      { heading: 'Q4 2026: Platform Expansion' },
      { paragraph: 'The final quarter of 2026 focuses on platform expansion and ecosystem growth. We\'re planning partnerships with other Web3 gaming platforms, integration with major DeFi protocols for token staking and yield generation, and the launch of our developer SDK to enable third-party game integrations.' },
      { paragraph: 'We\'re also exploring expansion into new gaming genres, with prototypes for strategy games, puzzle games, and arcade classics in development. Community feedback will play a crucial role in determining which games receive full development resources.' },
      { heading: 'Long-Term Vision: 2025 and Beyond' },
      { paragraph: 'Looking further ahead, we envision EvoFuse as a comprehensive Web3 gaming ecosystem that supports dozens of games, millions of players, and a thriving economy. Our roadmap includes AI-powered matchmaking, virtual reality integrations, and partnerships with major gaming studios.' },
      { paragraph: 'The ultimate goal is to create a platform where playing games is not just entertainment but a viable way to earn income, build reputation, and participate in a global gaming community. We\'re committed to making Web3 gaming accessible, enjoyable, and profitable for players worldwide.' },
      { heading: 'How to Stay Updated' },
      { paragraph: 'To stay informed about development progress, join our Discord community, follow our social media channels, and subscribe to our newsletter. We regularly share development updates, behind-the-scenes content, and early access opportunities for new features.' }
    ]
  },
  {
    slug: 'achievements-and-milestones',
    title: 'Achievements & Milestones',
    imageSrc: blog6,
    variant: 'dark',
    category: 'game',
    author: 'Emily Davis',
    postedDate: 'Oct 3, 2025',
    readingTime: '5 min read',
    dateValue: new Date('2026-01-03'),
    content: [
      { paragraph: 'As we reflect on EvoFuse\'s journey, we\'re proud to celebrate the incredible achievements of our community and the significant milestones we\'ve reached together. This article highlights standout players, platform accomplishments, and the collective progress that makes EvoFuse a thriving gaming ecosystem.' },
      { heading: 'Community Champions: Top Performers' },
      { paragraph: 'Our leaderboards showcase exceptional talent from around the world. Player "CryptoMaster2048" achieved an unprecedented score of 99,765 in 2048, setting a new world record that stood for three months before being narrowly surpassed. This level of dedication and skill exemplifies what makes our community special.' },
      { paragraph: 'In Othello Crypto Kings, "StrategicMind" maintained an impressive 95% win rate over 250 matches, demonstrating mastery of both game mechanics and competitive strategy. Such consistent excellence earns recognition and substantial token rewards, showcasing the platform\'s commitment to rewarding skill and dedication.' },
      { heading: 'Platform Milestones: By the Numbers' },
      { paragraph: 'EvoFuse has achieved remarkable growth metrics since launch. We\'ve processed over 1 million game sessions, with players spending an average of 45 minutes per session—a testament to the engaging gameplay experience. Our retention rate of 68% after 30 days significantly exceeds industry averages for Web3 gaming platforms.' },
      { paragraph: 'Token distribution has reached 5 million DWAT tokens, with the average active player earning approximately 500 tokens per month through gameplay. This demonstrates the platform\'s success in creating sustainable earning opportunities for our community.' },
      { heading: 'Seasonal Highlights' },
      { paragraph: 'Our seasonal tournaments have been particularly successful, with the Winter Championship attracting over 2,000 participants competing for a prize pool of 100,000 DWAT tokens. The event showcased incredible gameplay, community engagement, and the competitive spirit that defines EvoFuse.' },
      { paragraph: 'Special events like "Double Rewards Weekend" and "Theme Creator Challenge" have driven record engagement, with participation rates increasing by 300% during these periods. These events not only reward players but also strengthen community bonds and platform loyalty.' },
      { heading: 'Feature Achievements' },
      { paragraph: 'From a development perspective, we\'ve successfully launched major features including the leaderboard system, tournament brackets, custom theme creation tools, and the governance voting platform. Each feature launch has been met with positive community response and high adoption rates.' },
      { paragraph: 'Our technical achievements include maintaining 99.9% uptime, processing transactions with an average confirmation time of under 2 seconds, and supporting up to 10,000 concurrent players without performance degradation. These metrics demonstrate the robustness of our infrastructure.' },
      { heading: 'Community Contributions' },
      { paragraph: 'Beyond gameplay achievements, our community has made significant contributions to platform development. Over 500 custom themes have been created by players, with the most popular themes being used by thousands of players. Community governance proposals have led to several platform improvements, including reward structure adjustments and new game mode additions.' },
      { heading: 'Looking Forward: New Challenges Ahead' },
      { paragraph: 'As we celebrate these achievements, we\'re also looking forward to new challenges and milestones. Upcoming goals include reaching 50,000 active players, launching our mobile applications, and introducing new games that expand the EvoFuse ecosystem.' },
      { paragraph: 'We\'re grateful to our community for making these achievements possible. Every player, every game session, and every achievement contributes to building something special. Together, we\'re not just playing games—we\'re shaping the future of Web3 gaming.' }
    ]
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}



