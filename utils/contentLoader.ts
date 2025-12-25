import type { Article, ArticleFrontmatter } from '../types/blog';

// Mock article data - In production, this would load from MDX files
const mockArticles: Article[] = [
    {
        id: '1',
        title: 'The Perfect Pour: Mastering Your Morning Brew',
        slug: 'perfect-pour-morning-brew',
        excerpt: 'Discover the science and art behind brewing the perfect cup of coffee every single morning.',
        author: 'Sarah Chen',
        publishDate: '2025-12-15',
        category: 'Brewing Tips',
        tags: ['brewing', 'coffee-science', 'morning-routine'],
        featuredImage: '/images/articles/perfect-pour.jpg',
        readTime: '5 min read',
        content: `
# The Perfect Pour: Mastering Your Morning Brew

Coffee is more than just a beverage—it's a ritual, a science, and an art form all rolled into one steaming cup. Whether you're rushing out the door or savoring a slow weekend morning, the quality of your brew can set the tone for your entire day. But what separates a mediocre cup from an exceptional one? The answer lies in mastering a few fundamental principles.

## Understanding Coffee Extraction

The key to a perfect brew lies in understanding extraction—the process of dissolving soluble compounds from ground coffee beans into water. When done correctly, extraction brings out the coffee's best flavors: sweetness, acidity, and body. When done poorly, you get either under-extracted (sour, weak) or over-extracted (bitter, harsh) coffee.

The sweet spot for extraction is typically between 18-22% of the coffee's mass. This might sound technical, but achieving it is surprisingly straightforward once you understand the variables at play.

## Water Temperature Matters

Most coffee experts agree that water temperature should be between 195°F and 205°F (90-96°C). This range is hot enough to extract the desirable flavors quickly but not so hot that it burns the coffee or extracts too many bitter compounds.

If you don't have a thermometer, a simple trick is to bring water to a full boil, then let it sit for 30 seconds before pouring. This naturally brings it down to the ideal range.

Different brewing methods have different temperature preferences. Pour-over methods often work best at the higher end (200-205°F), while French press can handle slightly cooler water (195-200°F) since the grounds steep longer.

## The Golden Ratio

For the perfect cup, use a ratio of 1:16—that's 1 gram of coffee for every 16 grams of water. For most people, this translates to about 2 tablespoons of ground coffee per 6 ounces of water.

Of course, this is just a starting point. Some prefer a stronger brew (1:15) while others like it lighter (1:17). The key is to find your sweet spot and stay consistent. Using a kitchen scale to measure both coffee and water takes the guesswork out entirely.

## Grind Size: The Often Overlooked Factor

The coarseness of your coffee grind has a massive impact on extraction. Finer grinds extract faster (good for espresso), while coarser grinds extract slower (ideal for French press). Using the wrong grind size for your brewing method is one of the most common mistakes home brewers make.

For pour-over methods like V60 or Chemex, aim for a medium grind—similar to granulated sugar. For drip coffee makers, medium to medium-fine works well. And for French press, go coarse—think sea salt.

## Freshness Is Everything

Coffee is at its peak flavor within 2-4 weeks of roasting. After that, it starts losing its aromatic compounds and tastes increasingly flat. Always check the roast date on your bag, and if possible, buy from roasters who include this information.

Once opened, store your coffee in an airtight container away from light, heat, and moisture. Avoid the freezer—despite popular belief, it can actually damage the beans through condensation and freezer burn.

## Water Quality: The Forgotten Ingredient

Since coffee is 98% water, the quality of your water matters enormously. If your tap water tastes off, your coffee will too. Filtered water is ideal—it removes chlorine and other off-flavors while retaining beneficial minerals that enhance extraction.

Avoid distilled or softened water, which lacks the minerals needed for proper extraction. The ideal water for coffee has a mineral content of 50-175 ppm (parts per million).

## Putting It All Together

Mastering your morning brew doesn't require expensive equipment or barista training. It just requires attention to these fundamental principles: proper extraction, correct water temperature, the right coffee-to-water ratio, appropriate grind size, fresh beans, and quality water.

Start by dialing in one variable at a time. Once you've found your perfect formula, your morning coffee will transform from a caffeine delivery system into a moment of genuine pleasure. And that's worth waking up for.
    `
    },
    {
        id: '2',
        title: 'From Bean to Cup: Our Sustainable Sourcing Journey',
        slug: 'bean-to-cup-sustainable-sourcing',
        excerpt: 'Learn how we partner with farmers around the world to bring you ethically sourced, premium coffee beans.',
        author: 'Marcus Rodriguez',
        publishDate: '2025-12-10',
        category: 'Sustainability',
        tags: ['sustainability', 'sourcing', 'ethics'],
        featuredImage: '/images/articles/sustainable-sourcing.jpg',
        readTime: '7 min read',
        content: `
# From Bean to Cup: Our Sustainable Sourcing Journey

At Speedy Coffee, we believe great taste starts with great relationships. Every cup you enjoy is the result of a complex journey that spans continents, involves dozens of hands, and requires careful stewardship of both people and planet. This is the story of how we source our coffee—and why it matters.

## The True Cost of Cheap Coffee

The global coffee market has long been plagued by exploitation. Farmers, who do the hardest work in the supply chain, often receive just a fraction of what consumers pay. In many regions, coffee farmers earn less than $2 per day, while their product sells for $5+ per cup in cafes.

We decided early on that we couldn't be part of that system. Our commitment to sustainable sourcing means paying above fair trade prices, building direct relationships with farming cooperatives, and investing in the long-term health of coffee-growing communities.

## Direct Trade: Cutting Out the Middlemen

Most coffee passes through multiple intermediaries before reaching roasters. Each middleman takes a cut, driving down what farmers receive. We practice direct trade, working directly with farming cooperatives and, in some cases, individual farms.

This approach has several benefits. Farmers receive 25-40% more for their coffee than they would through conventional channels. We gain transparency into growing practices and can provide feedback on quality. And we can build relationships that last decades, not just seasons.

## Our Partner Farms Around the World

### Ethiopia: The Birthplace of Coffee

We work with the Yirgacheffe Coffee Farmers Cooperative Union, representing over 50,000 smallholder farmers in southern Ethiopia. The volcanic soil and high elevations (1,700-2,200 meters) produce coffee with distinctive floral and citrus notes.

Our partnership includes funding for education programs, healthcare initiatives, and agricultural training. We also helped establish a wet mill that allows farmers to process their own coffee, adding value and increasing their income.

### Colombia: Mountain-Grown Excellence

In Colombia's coffee triangle, we partner with Finca La Esperanza, a family-run farm that's been growing coffee for four generations. They practice shade-grown agriculture, maintaining forest canopy that protects wildlife habitats and prevents soil erosion.

The farm is also pioneering water conservation techniques, reducing water usage in processing by 80% compared to traditional methods. This is crucial in a region where climate change is making water scarcity an increasing concern.

### Guatemala: Women-Led Farming Cooperative

One of our proudest partnerships is with Mujeres en Café, a cooperative of women coffee farmers in Guatemala's Huehuetenango region. In a traditionally male-dominated industry, these women are breaking barriers and proving that gender equity and quality coffee go hand in hand.

We've committed to purchasing their entire harvest, providing the financial security they need to invest in their farms and communities. The cooperative now runs a school, a health clinic, and a credit union serving over 200 families.

## Environmental Stewardship

Sustainable sourcing isn't just about fair wages—it's about preserving the ecosystems that make great coffee possible. All our partner farms meet strict environmental standards:

**Shade-Grown Practices**: Coffee grown under tree canopy rather than in full sun. This protects biodiversity, provides habitat for migratory birds, and produces better-tasting coffee.

**Organic or Low-Input Agriculture**: Minimal or zero synthetic pesticides and fertilizers. Farmers use composting, crop rotation, and natural pest management instead.

**Water Conservation**: Coffee processing is water-intensive. Our partners use eco-pulping technology and water recycling systems to minimize consumption and prevent water pollution.

**Soil Health**: Practices like terracing, cover cropping, and erosion control maintain the soil fertility that will be needed for generations to come.

## Climate Change: The Elephant in the Room

Climate change poses an existential threat to coffee production. Rising temperatures, unpredictable rainfall, and new pest pressures are making traditional growing regions less viable. By 2050, it's estimated that 50% of current coffee-growing land will be unsuitable for the crop.

We're addressing this through several initiatives:

- **Funding climate adaptation research** at agricultural universities in coffee-growing regions
- **Supporting agroforestry** projects that increase farm resilience
- **Helping farmers transition** to climate-resistant coffee varieties
- **Investing in diversification** so farming communities aren't dependent on a single crop

## The Premium You Pay, The Impact It Makes

Our coffee costs more than supermarket brands. We're transparent about why: about 40% of what you pay goes directly to coffee farmers and their communities. Another 20% goes to environmental programs and quality control.

When you choose Speedy Coffee, you're not just buying a product—you're participating in a system that values people and planet alongside profit. You're supporting a woman farmer in Guatemala who can now send her daughter to university. You're protecting a forest in Ethiopia that's home to endangered species. You're investing in a future where great coffee and ethical business aren't contradictions.

## Our Commitment Moving Forward

We're not perfect, and sustainability is a journey, not a destination. But we're committed to radical transparency, continuous improvement, and putting our values into action. Every bag of Speedy Coffee comes with a QR code that tells you exactly which farm your beans came from and how much we paid for them.

We believe coffee can be a force for good in the world. And we believe that the best-tasting cup is one you can feel good about drinking.
    `
    },
    {
        id: '3',
        title: '5 Coffee Myths Debunked by Science',
        slug: 'coffee-myths-debunked',
        excerpt: 'Separating fact from fiction in the world of coffee. What does science really say about your daily cup?',
        author: 'Dr. Emily Watson',
        publishDate: '2025-12-05',
        category: 'Coffee Science',
        tags: ['science', 'myths', 'health'],
        featuredImage: '/images/articles/coffee-myths.jpg',
        readTime: '6 min read',
        content: `
# 5 Coffee Myths Debunked by Science

Let's separate the coffee facts from the coffee fiction. Coffee is one of the most studied beverages on Earth, yet myths and misconceptions persist. From health claims to brewing techniques, misinformation abounds. Let's look at what science actually says about your daily cup.

## Myth #1: Coffee Dehydrates You

**The Claim**: Coffee is a diuretic, so drinking it dehydrates you and doesn't count toward your daily water intake.

**The Science**: While coffee does have a mild diuretic effect, studies show it doesn't lead to dehydration. A 2014 study published in PLOS ONE found that moderate coffee consumption (4 cups per day) provided similar hydrating qualities to water.

Your body quickly develops tolerance to coffee's diuretic effect, usually within 1-4 days of regular consumption. And while you might urinate slightly more frequently, the amount of fluid you lose is far less than the amount you consume.

**The Verdict**: Coffee absolutely counts toward your daily fluid intake. Just don't use it as your *only* source of hydration.

## Myth #2: Coffee Stunts Your Growth

**The Claim**: Drinking coffee as a child or teenager will stunt your growth.

**The Science**: This myth likely originated from early 20th-century marketing campaigns by Postum, a coffee substitute. There is zero scientific evidence linking coffee consumption to reduced height or bone development.

A Harvard study following over 81,000 women for decades found no correlation between coffee intake and bone health or fracture risk. Height is determined primarily by genetics and overall nutrition, not coffee consumption.

That said, there are other reasons to limit caffeine in children—including sleep disruption and potential anxiety—but stunted growth isn't one of them.

**The Verdict**: Completely false. Coffee doesn't affect your height.

## Myth #3: Dark Roast Has More Caffeine

**The Claim**: Dark, bold roasts pack more of a caffeine punch than lighter roasts.

**The Science**: This one's tricky because the answer depends on how you measure. By weight, light roast actually has slightly more caffeine because the roasting process breaks down caffeine molecules. The longer beans roast, the more caffeine is lost.

However, dark roasts are less dense (the beans expand and lose moisture during roasting). So if you measure by volume (like scoops), dark roast will give you slightly more beans and thus slightly more caffeine.

The difference is minimal either way—we're talking about 5-10% variation. The real difference between roasts is flavor, not caffeine content.

**The Verdict**: Light roast has marginally more caffeine by weight, but the difference is negligible in practice.

## Myth #4: Coffee Causes Heart Disease

**The Claim**: Coffee is bad for your heart and increases the risk of cardiovascular disease.

**The Science**: This myth has been thoroughly debunked. A meta-analysis of 36 studies involving over 1.2 million participants found that moderate coffee consumption (3-5 cups per day) is associated with a reduced risk of cardiovascular disease.

Coffee is rich in antioxidants and has been linked to reduced inflammation, improved blood vessel function, and lower risk of stroke. A 2018 study in the European Journal of Preventive Cardiology found that coffee consumption was associated with reduced all-cause mortality.

There's a caveat: unfiltered coffee (like French press or espresso) contains cafestol and kahweol, compounds that can raise LDL cholesterol in some people. If you have high cholesterol, stick to filtered coffee.

**The Verdict**: False. Moderate coffee consumption is actually protective for most people's cardiovascular health.

## Myth #5: Coffee Sobers You Up

**The Claim**: If you're drunk, drinking coffee will help you sober up faster.

**The Science**: This dangerous myth persists despite clear evidence to the contrary. Coffee does not metabolize alcohol faster or reduce blood alcohol content. Your liver processes alcohol at a fixed rate (about one standard drink per hour), and caffeine doesn't speed this up.

What coffee does do is make you more alert—creating a "wide-awake drunk" who may feel more capable than they actually are. This can lead to poor decision-making, like getting behind the wheel when you're still impaired.

A Temple University study found that people who consumed both caffeine and alcohol felt more capable but performed just as poorly on coordination and judgment tests as those who only drank alcohol.

**The Verdict**: False and potentially dangerous. Time is the only thing that sobers you up.

## Bonus Myth: Coffee Causes Cancer

This one deserves mention because it causes so much unnecessary worry. The World Health Organization reviewed over 1,000 studies and concluded in 2016 that coffee is not carcinogenic. In fact, it may reduce the risk of certain cancers, including liver and endometrial cancer.

The confusion arose from older studies that didn't account for confounding factors like smoking, which was more common among coffee drinkers in the past. When controlled properly, coffee shows protective effects.

## The Bottom Line

Coffee is one of the most studied substances we consume, and the science is overwhelmingly positive. Moderate consumption (3-5 cups per day) is safe for most people and may offer significant health benefits.

As with anything, individual responses vary. Some people are slow caffeine metabolizers and may experience negative effects. If coffee makes you jittery, anxious, or disrupts your sleep, reduce your intake or switch to decaf.

But for most of us, that morning cup (or three) is not just safe—it's a healthy part of a balanced diet. So drink up, and ignore the myths.
    `
    },
    {
        id: '4',
        title: 'The Rise of Cold Brew: Why It\'s Here to Stay',
        slug: 'rise-of-cold-brew',
        excerpt: 'Cold brew has taken the coffee world by storm. Discover why this smooth, low-acid brewing method is more than just a trend.',
        author: 'Jake Morrison',
        publishDate: '2025-11-28',
        category: 'Brewing Methods',
        tags: ['cold-brew', 'brewing', 'trends'],
        featuredImage: '/images/articles/cold-brew.jpg',
        readTime: '4 min read',
        content: `
# The Rise of Cold Brew: Why It's Here to Stay

Cold brew coffee has transformed from a niche product to a mainstream favorite in less than a decade. What started as a specialty item in artisan cafes is now available everywhere from gas stations to grocery stores. But is cold brew just another passing trend, or does it represent a fundamental shift in how we consume coffee? The evidence suggests it's here for the long haul—and for good reasons.

## What Exactly Is Cold Brew?

First, let's clear up some confusion. Cold brew is not simply hot coffee poured over ice (that's iced coffee). Cold brew is made by steeping coarsely ground coffee in cold or room temperature water for 12-24 hours, then filtering out the grounds.

This extended extraction time at low temperatures produces a fundamentally different beverage than traditional hot brewing methods. The chemistry is different, the flavor profile is different, and the drinking experience is different.

## The Chemistry of Cold Extraction

When you brew coffee with hot water, you extract both desirable compounds (like caffeine and flavor oils) and undesirable ones (including certain acids and bitter tannins). Hot water is an aggressive solvent—it extracts quickly but indiscriminately.

Cold water is gentler and more selective. It still extracts caffeine effectively, but it pulls out fewer of the compounds that cause bitterness and acidity. The result is a naturally sweet, smooth coffee with about 67% less acid than hot-brewed coffee.

This lower acidity isn't just about taste. For the estimated 40% of Americans who experience acid reflux or digestive issues, cold brew can be a game-changer, allowing them to enjoy coffee without discomfort.

## The Flavor Advantage

Cold brew has a distinct flavor profile that many people prefer, especially during warmer months. Where hot coffee can be bright, acidic, and complex, cold brew tends to be smooth, sweet, and chocolatey with a fuller body.

The lower acidity means you can taste the coffee's inherent sweetness more clearly. Many cold brew drinkers find they need less (or no) added sugar compared to hot coffee. The smooth, almost creamy mouthfeel comes from the higher concentration of oils that remain suspended in the brew.

Because the brewing process is so forgiving—it's almost impossible to over-extract—cold brew maintains a consistently mellow flavor without the burnt or bitter notes that can plague hot brewing methods.

## Convenience in a Fast-Paced World

One of cold brew's biggest advantages is convenience. You can make a large batch on Sunday night and have ready-to-drink coffee for the entire week. Just grab it from the fridge, pour over ice, add milk if desired, and go.

For coffee shops, cold brew is equally convenient. It can be brewed in large batches and kept refrigerated for up to two weeks without significant flavor degradation. This consistency and shelf-stability make it ideal for bottled and canned products, fueling the explosive growth of the ready-to-drink coffee market.

The global RTD coffee market was valued at $31 billion in 2023 and is projected to reach $58 billion by 2030—with cold brew leading the charge.

## The Health Halo Effect

Whether justified or not, cold brew has developed a reputation as the "healthier" coffee option. While the lower acidity is a genuine benefit for some, other health claims are more questionable.

Cold brew typically has more caffeine than hot coffee by volume—about 200mg per 16oz compared to 95mg for the same amount of hot drip coffee. This isn't because cold brewing extracts more caffeine; it's because cold brew is usually made as a concentrate and diluted less than hot coffee.

The lack of heat in cold brewing may preserve more antioxidants, though research on this is still limited. What's clear is that cold brew contains the same beneficial compounds as hot coffee—chlorogenic acids, antioxidants, and anti-inflammatory compounds—just in slightly different ratios.

## The Customization Factor

Cold brew serves as an excellent base for customization. Its smooth, low-acid profile makes it a blank canvas for adding flavors, milks, and sweeteners without clashing.

This has spawned an entire category of cold brew-based drinks: nitro cold brew (infused with nitrogen for a creamy, Guinness-like texture), cold brew lattes, flavored cold brews, and even cold brew cocktails. The versatility keeps the format fresh and allows for endless innovation.

## Sustainability Considerations

There's a potential downside to cold brew's popularity: resource usage. Cold brew requires about twice as much coffee grounds as hot brewing for the same amount of beverage. This means higher costs and a larger environmental footprint per cup.

However, innovative companies are finding ways to address this. Some use precision milling to maximize extraction efficiency. Others are experimenting with pressure-assisted cold brewing that reduces steep time and coffee usage.

At Speedy Coffee, we've developed a cold brew process that uses 30% less coffee than traditional methods while maintaining the same smooth flavor profile. We also ensure all our cold brew grounds go to composting programs rather than landfills.

## The Future of Cold Brew

Rather than being a fad, cold brew represents coffee's adaptation to changing consumer preferences. Modern coffee drinkers want:

- **Convenience**: Ready-to-drink options that fit busy lifestyles
- **Consistency**: The same great taste every time
- **Customization**: A base they can personalize
- **Lower acidity**: Easier on sensitive stomachs
- **Year-round enjoyment**: Coffee that's refreshing in summer

Cold brew delivers on all these fronts. As climate change makes summers hotter and longer, demand for cold coffee options will only increase.

We're also seeing cold brew expand beyond coffee shops and into home brewing. Cold brew makers are now common kitchen appliances, and many coffee companies (including ours) offer cold brew-specific grinds and concentrates.

## Making Great Cold Brew at Home

You don't need fancy equipment to make excellent cold brew. Here's the basic method:

1. **Use a 1:4 ratio** of coffee to water (e.g., 1 cup coffee grounds to 4 cups water)
2. **Choose coarse grind** similar to French press
3. **Steep for 12-18 hours** in the refrigerator or at room temperature
4. **Filter thoroughly** through a fine-mesh strainer or cheesecloth
5. **Dilute to taste** with water, milk, or over ice

The concentrate will keep for up to two weeks refrigerated.

## The Verdict

Cold brew isn't going anywhere. It's carved out a permanent place in coffee culture by offering genuine advantages: lower acidity, smooth flavor, high caffeine, and unmatched convenience. While it may not replace hot coffee entirely, it has expanded the coffee market and brought new consumers into the fold.

Whether you're a longtime cold brew devotee or a hot coffee purist curious to try something new, there's never been a better time to explore this brewing method. The quality has never been higher, the options have never been more diverse, and the science behind why it works so well has never been clearer.

Cold brew is here to stay. And that's a good thing for coffee lovers everywhere.
    `
    },
    {
        id: '5',
        title: 'Coffee Tasting 101: Developing Your Palate',
        slug: 'coffee-tasting-101',
        excerpt: 'Learn how to taste coffee like a professional and discover the complex flavors hiding in your cup.',
        author: 'Sarah Chen',
        publishDate: '2025-11-20',
        category: 'Coffee Education',
        tags: ['tasting', 'education', 'flavor-profiles'],
        featuredImage: '/images/articles/coffee-tasting.jpg',
        readTime: '8 min read',
        content: `
# Coffee Tasting 101: Developing Your Palate

Professional coffee tasters can identify hundreds of distinct flavors in a single cup of coffee. They can tell you the region where beans were grown, the processing method used, and even the elevation of the farm—all from taste alone. While reaching that level of expertise takes years, anyone can learn to taste coffee more critically and enjoyably. Here's how to develop your palate and discover the complex world of coffee flavors.

## Why Bother Learning to Taste Coffee?

You might be thinking: "I already know if I like my coffee or not. Why do I need to analyze it?" Fair question. But learning to taste coffee more carefully can:

- Help you identify which coffees you truly enjoy (and why)
- Allow you to communicate with baristas and roasters about your preferences
- Deepen your appreciation for quality coffee
- Make you a more informed buyer
- Simply make drinking coffee more enjoyable

Just like learning about wine or craft beer, coffee tasting turns a daily habit into an engaging sensory experience.

## The Professional Framework: Coffee Cupping

Professional coffee tasters use a standardized method called "cupping" to evaluate coffee objectively. While you don't need to follow the exact protocol at home, understanding it provides a useful framework.

In professional cupping:
- Coffee is ground to a specific coarseness
- Hot water (200°F) is poured over the grounds
- The coffee steeps for 4 minutes
- The "crust" of grounds is broken and aromas are evaluated
- Coffee is slurped from a spoon to spray across the palate

The slurping isn't just for effect—it aerates the coffee, spreading it across your entire tongue and allowing you to perceive flavors more completely.

## The Coffee Taster's Flavor Wheel

The Specialty Coffee Association's Coffee Taster's Flavor Wheel is an invaluable tool. It organizes coffee flavors into categories:

**Center (General)**: Fruity, Sour/Fermented, Green/Vegetative, Other, Roasted, Spices, Nutty/Cocoa, Sweet

**Middle Ring (Specific)**: Berry, Citrus Fruit, Stone Fruit, etc.

**Outer Ring (Very Specific)**: Blackberry, Raspberry, Blueberry, etc.

When you're starting out, you might only identify flavors from the center ring—"this tastes fruity." With practice, you'll start picking out specific fruits, and eventually subtle variations like "Meyer lemon" versus "pink grapefruit."

## The Five Core Elements of Coffee Tasting

Professional tasters evaluate coffee across several dimensions:

### 1. Aroma

Smell is responsible for about 80% of what we perceive as "taste." Coffee has over 800 aromatic compounds—more than wine.

**How to evaluate**: Smell the coffee at different stages: dry grounds, wet grounds (after adding water), and brewed coffee. Each reveals different aromatics. Notice what you smell: floral, fruity, chocolatey, nutty, spicy?

### 2. Flavor

This is where the Coffee Taster's Flavor Wheel comes in. Try to identify specific flavors beyond just "coffee."

**How to evaluate**: Take a sip (or slurp), let it coat your entire mouth, and pay attention. What flavors do you detect? Common descriptors include berry, citrus, chocolate, caramel, nuts, and stone fruits.

### 3. Acidity

In coffee, acidity is a positive attribute (when balanced). It's what makes coffee taste bright, lively, and complex. Think of the difference between apple juice (high acidity, bright) and banana (low acidity, soft).

**How to evaluate**: Notice how your mouth responds. Does the coffee make your mouth water? Does it feel crisp and vibrant? That's acidity. African coffees tend to have higher acidity; Indonesian coffees lower.

Acidity can be described as:
- Bright/Crisp (high)
- Balanced/Smooth (medium)
- Soft/Mellow (low)

### 4. Body

Body refers to the physical sensation of coffee in your mouth—its weight and texture.

**How to evaluate**: Is the coffee light and tea-like? Full and creamy? Somewhere in between? Pay attention to mouthfeel. Sumatran coffees often have heavy body; Ethiopian coffees tend to be lighter.

Body can be:
- Light (watery, delicate)
- Medium (smooth)
- Full (rich, syrupy, creamy)

### 5. Finish/Aftertaste

The flavors that linger after you swallow.

**How to evaluate**: After swallowing, pay attention to what remains. Does the flavor change? Linger? Disappear quickly? Is the aftertaste pleasant or bitter?

A clean finish means the flavor fades pleasantly without off-notes. A long finish means flavors persist for a while.

## Practical Exercise: A Basic Tasting Session

Want to practice? Here's a simple tasting exercise:

**What you need**:
- 2-3 different coffees (preferably single-origin from different regions)
- A French press or pour-over device
- A notebook

**The process**:

1. **Brew** each coffee using the same method and parameters
2. **Smell** the dry grounds. Write down what you notice
3. **Brew** and smell again while hot. New aromas?
4. **Taste** without swallowing. Let it sit on your tongue. What flavors?
5. **Slurp** (seriously) to aerate and spread the coffee
6. **Note** acidity, body, and flavors
7. **Swallow** and notice the finish
8. **Compare** between coffees. Which do you prefer? Why?

Don't worry if you can't identify specific flavors at first. Your palate develops with practice.

## Common Flavor Notes by Region

Different growing regions produce characteristic flavor profiles:

**Ethiopia**: Floral, tea-like, blueberry, jasmine, bergamot (bright acidity, light body)

**Kenya**: Black currant, tomato, grapefruit (very bright acidity, medium body)

**Colombia**: Caramel, nutty, chocolate (balanced acidity, medium body)

**Brazil**: Nutty, chocolate, low acidity (full body, sweet)

**Sumatra**: Earthy, herbal, tobacco, dark chocolate (low acidity, heavy body)

**Guatemala**: Cocoa, spice, apple (medium acidity, full body)

These are generalizations, but they provide a starting point for understanding regional characteristics.

## Developing Your Vocabulary

One challenge in coffee tasting is finding words to describe what you're experiencing. Some tips:

**Compare to familiar foods**: "This tastes like dark chocolate" or "This reminds me of blueberries"

**Use texture words**: Silky, creamy, syrupy, tea-like, smooth, velvety

**Describe sensations**: Bright, crisp, mellow, bold, delicate

**Be specific when possible**: Instead of "fruity," try "stone fruit" or even "apricot"

There are no wrong answers in describing your own experience. If a coffee tastes like your grandmother's apple pie, that's a perfectly valid tasting note.

## Common Tasting Mistakes to Avoid

**Tasting when too hot**: Coffee that's scalding hot will burn your tongue and make everything taste the same. Let it cool to around 160°F before tasting.

**Using flavored additions**: Taste black first. Sugar and milk mask subtle flavors.

**Tasting only one coffee**: Comparison is the best teacher. Taste 2-3 coffees side-by-side.

**Getting intimidated**: Everyone starts as a beginner. Even professional Q Graders (certified coffee tasters) had to learn.

**Expecting perfection**: Some days your palate is sharper than others. Fatigue, food, medication, and even weather can affect taste perception.

## Taking It Further

Once you're comfortable with basic tasting:

- Join a coffee cupping at a local roaster
- Try coffees from the same region but different farms
- Compare different processing methods (washed vs. natural)
- Experiment with different brewing methods for the same coffee
- Keep a coffee journal to track preferences

## The Bottom Line

Developing your palate isn't about becoming a snob or making coffee less accessible. It's about getting more enjoyment from something you already love. With practice, you'll start noticing flavors you never knew existed, understanding why you prefer certain coffees, and appreciating the incredible diversity that coffee offers.

So next time you brew a cup, slow down. Smell it. Taste it carefully. Ask yourself what you're experiencing. Your palate will thank you—and so will your coffee.
    `
    },
    {
        id: '6',
        title: 'The Ultimate Guide to Coffee Grind Sizes',
        slug: 'guide-to-grind-sizes',
        excerpt: 'From espresso to French press, learn which grind size works best for every brewing method.',
        author: 'Marcus Rodriguez',
        publishDate: '2025-11-15',
        category: 'Brewing Tips',
        tags: ['grinding', 'brewing', 'techniques'],
        featuredImage: '/images/articles/grind-sizes.jpg',
        readTime: '5 min read',
        content: `
# The Ultimate Guide to Coffee Grind Sizes

Grind size is one of the most important variables in coffee brewing, yet it's often overlooked by home brewers. You can have the best beans, perfect water temperature, and ideal brewing time—but if your grind size is wrong, your coffee will suffer. Too fine and you'll get bitter, over-extracted coffee. Too coarse and you'll get weak, sour coffee. Getting it just right is the key to unlocking your coffee's full potential.

## Why Grind Size Matters So Much

Coffee extraction is all about surface area and time. When you grind coffee, you're dramatically increasing the surface area exposed to water. The finer the grind, the more surface area, and the faster extraction happens.

Think of it this way: A whole coffee bean might take weeks to dissolve in water. Ground coffee extracts in minutes. Powdered coffee (like Turkish coffee) extracts in seconds.

Different brewing methods require different extraction times, and grind size is how you control that. Match your grind to your method, and you'll get balanced extraction. Use the wrong grind, and no amount of technique will save your coffee.

## The Grind Size Spectrum

Here's the complete spectrum from coarsest to finest, with visual comparisons:

### Extra Coarse (Cold Brew)
**Visual**: Large chunks, like cracked peppercorns or sea salt
**Used for**: Cold brew, cowboy coffee
**Why**: These methods have very long steep times (12-24 hours), so you need large particles to avoid over-extraction

### Coarse (French Press)
**Visual**: Distinct particles, like kosher salt or breadcrumbs
**Used for**: French press, percolators, coffee cupping
**Why**: 4-5 minute steep time requires a coarse grind. Too fine and you'll get sludge through the metal filter

### Medium-Coarse (Chemex)
**Visual**: Rough sand or coarse sugar
**Used for**: Chemex, Clever Dripper, some cold drip methods
**Why**: Chemex's thick filters slow down flow, so a slightly coarser grind maintains proper brew time

### Medium (Drip Coffee)
**Visual**: Regular sand or granulated sugar
**Used for**: Drip coffee makers, pour-over cones (V60, Kalita), siphon brewers, Aeropress (with longer brew time)
**Why**: The sweet spot for most home brewing. Works with 3-4 minute brew times

### Medium-Fine (Pour-Over)
**Visual**: Finer than sand, similar to table salt
**Used for**: Pour-over methods (V60, Kalita), Aeropress (short brew time), Moka pot
**Why**: Quick pour-overs (2-3 minutes) need finer grinds for adequate extraction

### Fine (Espresso)
**Visual**: Powdery but still with texture, like fine table salt or flour with grit
**Used for**: Espresso machines, Moka pot (sometimes)
**Why**: Espresso extracts in 25-30 seconds under high pressure, requiring very fine grounds

### Extra Fine (Turkish Coffee)
**Visual**: Powder, like flour or confectioner's sugar
**Used for**: Turkish coffee (ibrik/cezve), some espresso machines
**Why**: Turkish coffee isn't filtered and extracts very quickly, requiring powder-fine grounds

## Matching Grind to Brew Method

Let's go deeper into the most common brewing methods:

### French Press
**Grind**: Coarse
**Why**: The metal mesh filter can't catch fine particles. Too fine = muddy, bitter coffee. The 4-minute steep time works perfectly with coarse grinds.
**Pro tip**: If your French press coffee is bitter, grind coarser or reduce steep time. If it's weak, grind slightly finer or extend steep time.

### Pour-Over (V60, Kalita, Bee House)
**Grind**: Medium to medium-fine
**Why**: The faster you pour, the finer you should grind. Slower pouring = coarser grind.
**Pro tip**: V60's ridged cone drains faster than Kalita's flat bottom, so V60 often works better with slightly finer grinds.

### Chemex
**Grind**: Medium-coarse
**Why**: Chemex filters are 20-30% thicker than other paper filters, which slows down flow. A coarser grind compensates for this.
**Pro tip**: If your Chemex brew takes more than 4-5 minutes, your grind is too fine.

### Drip Coffee Maker
**Grind**: Medium
**Why**: Standard drip machines are designed around this grind size. The basket filter and flow rate expect medium grounds.
**Pro tip**: If your drip coffee is weak, try grinding slightly finer before increasing the amount of coffee.

### Espresso
**Grind**: Fine
**Why**: Espresso uses 9 bars of pressure to extract in 25-30 seconds. Fine grounds create the resistance needed to slow down the water.
**Pro tip**: Espresso grind is incredibly sensitive. A single click on your grinder can change extraction time by 5+ seconds.

### Aeropress
**Grind**: Medium to fine (depends on method)
**Why**: Aeropress is versatile. Standard method (3-4 minute steep) = medium. Inverted method with shorter time = finer.
**Pro tip**: Aeropress is forgiving. Experiment to find your preference.

### Cold Brew
**Grind**: Extra coarse
**Why**: 12-24 hour steep time means maximum extraction. Coarse grinds prevent excessive bitterness.
**Pro tip**: If your cold brew is too strong or bitter, grind coarser. Too weak? Grind finer or extend steep time.

### Moka Pot
**Grind**: Fine to medium-fine
**Why**: Moka pots use pressure (but not as much as espresso) and extract quickly. Fine grounds work best.
**Pro tip**: Not quite as fine as espresso. Think between espresso and drip.

## Signs Your Grind Size Is Wrong

### Too Fine (Over-Extraction)
- **Taste**: Bitter, astringent, harsh
- **Other signs**: Brew time is too long, coffee drips very slowly
- **Solution**: Grind coarser

### Too Coarse (Under-Extraction)
- **Taste**: Sour, weak, watery, salty
- **Other signs**: Brew time is too fast, coffee looks pale
- **Solution**: Grind finer

## Blade Grinders vs. Burr Grinders

**Blade Grinders** (the cheap ones): Like a blender—they chop randomly, producing inconsistent particle sizes. You get some dust, some chunks, and everything in between. This leads to uneven extraction.

**Burr Grinders** (the good ones): Crush beans between two burrs to create uniform particle sizes. Two types:

- **Flat burr**: Slightly more consistent, better for espresso
- **Conical burr**: Slightly less expensive, great for most methods

**Recommendation**: If you're serious about coffee, invest in a burr grinder. Even an entry-level burr grinder ($40-60) beats the best blade grinder.

## Hand Grinders vs. Electric

**Hand Grinders**:
- Pros: Quiet, portable, no electricity, often cheaper than electric burrs
- Cons: Requires effort, slower (1-2 minutes to grind)
- Best for: Travel, single servings, limited budget

**Electric Grinders**:
- Pros: Fast, consistent, effortless
- Cons: More expensive, louder, requires counter space
- Best for: Daily use, multiple cups, espresso

## Pre-Ground vs. Grinding Fresh

Pre-ground coffee starts losing flavor within 30 minutes of grinding due to oxidation. Within a week, it's lost most of its aromatic compounds.

Whole beans stay fresh for 2-4 weeks after roasting if stored properly. Grinding just before brewing preserves maximum flavor.

**Bottom line**: If you can only upgrade one aspect of your coffee routine, get a grinder and buy whole beans.

## Grind Size Adjustments: The Fine-Tuning Process

Once you're in the ballpark with grind size, fine-tuning makes the difference between good and great coffee:

**If coffee is too bitter**: Grind coarser (or reduce brew time/water temperature)

**If coffee is too sour**: Grind finer (or increase brew time/water temperature)

**If coffee is weak**: Grind finer OR use more coffee (don't extend brew time too much)

**If coffee is muddy**: Grind coarser (especially for French press)

Make one small adjustment at a time. Change grind size by one "click" or notch and taste the difference before adjusting further.

## Storing Ground Coffee (If You Must)

If you absolutely must grind in advance:
- Grind no more than a week's worth
- Store in an airtight container
- Keep in a cool, dark place
- Use within 3-5 days for best flavor

But seriously, grind fresh if possible.

## Common Mistakes

**Mistake 1**: Using one grind size for everything
**Fix**: Adjust grind for each brew method

**Mistake 2**: Buying pre-ground "for espresso" and using it in a drip maker
**Fix**: Match pre-ground labels to your method or grind fresh

**Mistake 3**: Not cleaning the grinder
**Fix**: Clean your grinder monthly to prevent rancid oil buildup

**Mistake 4**: Grinding too much at once with a blade grinder, creating heat
**Fix**: Pulse in short bursts, or upgrade to a burr grinder

**Mistake 5**: Ignoring grind size when troubleshooting bad coffee
**Fix**: Always consider grind size first when diagnosing issues

## The Bottom Line

Grind size is the single most impactful variable you control in home brewing. Master it, and you'll unlock better coffee than most cafes serve. Here's the cheat sheet:

- **Cold Brew**: Extra coarse (sea salt)
- **French Press**: Coarse (kosher salt)
- **Chemex**: Medium-coarse (rough sand)
- **Drip Coffee**: Medium (regular sand)
- **Pour-Over**: Medium-fine (table salt)
- **Espresso**: Fine (flour with grit)
- **Turkish**: Extra fine (powder)

Start with these baselines, then adjust based on taste. Your perfect grind is the one that makes coffee you love to drink. And now you have the knowledge to find it.
    `
    }
];

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
    return mockArticles.sort((a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
    return mockArticles.find(article => article.slug === slug);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): Article[] {
    return mockArticles.filter(article => article.category === category);
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(tag: string): Article[] {
    return mockArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get latest articles
 */
export function getLatestArticles(limit: number = 6): Article[] {
    return getAllArticles().slice(0, limit);
}

/**
 * Get related articles based on category and tags
 */
export function getRelatedArticles(currentArticle: Article, limit: number = 3): Article[] {
    const related = mockArticles
        .filter(article => article.id !== currentArticle.id)
        .map(article => {
            let score = 0;
            // Same category gets higher score
            if (article.category === currentArticle.category) score += 3;
            // Shared tags get points
            const sharedTags = article.tags.filter(tag => currentArticle.tags.includes(tag));
            score += sharedTags.length;
            return { article, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.article);

    return related;
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
    const categories = new Set(mockArticles.map(article => article.category));
    return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
    const tags = new Set(mockArticles.flatMap(article => article.tags));
    return Array.from(tags).sort();
}
