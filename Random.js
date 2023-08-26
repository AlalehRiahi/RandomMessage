// create a function to pick a random item from an array

const arrTopics = ['mindfulness', 'friendship', 'business'];

const pickRandom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);

    return arr[randomIndex];
}

const pickSubtopic = (topic) => {
    
    switch (topic) {
        case 'mindfulness':
            return pickRandom (['power of mind', 'peace of mind', 'free your mind', 'the subconscious mind']);
        
        case 'friendship':
            return pickRandom(['Inspirational', 'Cute', 'Short and Sweet', 'Funny']);
        case 'business':
            return pickRandom['General', 'Change', 'Constraints', 'Support', 'Success', 'Strife', 'Failure'];
    }

}


const generateQuote = (topic, subtopic) => {
 
    switch (topic) {
        case 'mindfulness':
            switch (subtopic) {
                    case 'power of mind':
                        return pickRandom ([
                            'What you think, you become. What you feel, you attract. What you imagine, you create. (Buddha)',
                            'Everything is created twice, first in the mind and then in reality.  (Robin Sharma)', 
                            'The mind is just like a muscle, the more you exercise it, the stronger it gets and the more it can expand. (Idowu Koyenikan)',
                            'Your only limitations are those you set upon yourself.(Roy T. Bennett)',
                            'We are what we pretend to be, so we must be careful about what we pretend to be. (Kurt Vonnegut)',
                            'Who looks outside, dreams; who looks inside, awakes. (Carl Jung)',
                            'This is bravery: using the challenge of daily life to sharpen our mind and open our heart. (Sakyong Mipham)',
                            'The soul always knows what to do to heal itself. The challenge is to silence the mind (Caroline Myss)'
                        ]);
                    case 'peace of mind':
                        return pickRandom ([
                            'Anger, resentment and jealousy does not change the heart of others-it only changes yours.(Shannon Alder)',
                            'Mindfulness helps you to be where you are when you are there. (Tim Ryan)',
                            'In today`s rush, we all think too much, seek too much, want too much and forget about the joy of just Being. (Eckhart Tolle)',
                            'Meditation is the only intentional, systematic human activity which, at bottom is about not trying to improve yourself or get anywhere else but simply to realize where you already are. (Jon Kabat-Zinn)',
                            'The mind is like water. When it is turbulent, it is difficult to see. When it is calm, everything becomes clear. (Prasad Mahes)',
                            'Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom. (Viktor E. Frankl)',
                            'You can not stop the waves, but you can learn to surf. (Jon Kabat-Zinn)'
                        ]);
                    case 'free your mind':
                        return pickRandom ([
                            'The attempt to escape from pain, is what creates more pain. (Gabor Maté)',
                            'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. (Rumi)',
                            'The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind. (Friedrich Nietzsche)',
                            'nstead of worrying about what you cannot control, shift your energy to what you can create. (Roy T. Bennett)',
                            'In the end, just three things matter: How well we have lived, How well we have loved, How well we have learned to let go. (Jack Kornfield)',
                            'Happiness is your nature. It is not wrong to desire it. What is wrong is seeking it outside when it is inside. (Ramana Maharshi)',
                            'All the suffering, stress, and addiction comes from not realizing you already are what you are looking for. (Jon Kabat-Zinn)'
                        ]);
                    case 'the subconscious mind':
                        return pickRandom ([
                            'Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become a reality. (Earl Nightingale)',
                            'The subconscious mind is like a tape player. Until you change the tape, it will not change. (Bruce Lipton)',
                            'Our subconscious minds have no sense of humor, play no jokes, and cannot tell the difference between reality and an imagined thought or image. What we continually think about eventually will manifest in our lives. (Robert Collier)',
                            'Traditions are the guideposts driven deep in our subconscious minds. The most powerful ones are those we can not even describe, are not even aware of. (Ellen Goodman)',
                            'We cannot always control our thoughts, but we can control our words, and repetition impresses the subconscious, and we are then masters of the situation. (Jane Fonda)',
                            'You will be a failure until you impress the subconscious with the conviction you are a success. This is done by making an affirmation which “clicks.” (Florence Scovel Shinn)',
                            'Only one thing registers on the subconscious mind: repetitive application, practice. What you practice is what you manifest. (Fay Weldon)'
                        ])
            }
        
        case 'friendship':
            switch (subtopic) {
                case 'Inspirational':
                    return pickRandom ([
                        'The most beautiful discovery true friends make is that they can grow separately without growing apart. (Elisabeth Foley)',
                        'Life is partly what we make it, and partly what it is made by the friends we choose. (Tennessee Williams)',
                        'They may forget what you said, but they will never forget how you made them feel. (Carl W. Buechner)',
                        'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone. (Audrey Hepburn)',
                        'Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life. (Amy Poehler)'
                    ]);
                case 'Cute':
                    return pickRandom ([
                        'A friend is someone who understands your past, believes in your future, and accepts you just the way you are. (unknown)',
                        'A real friend is one who walks in when the rest of the world walks out. (Walter Winchell)',
                        'Growing apart does not change the fact that for a long time we grew side by side; our roots will always be tangled. I am glad for that. (Ally Condie)',
                        'When the world is so complicated, the simple gift of friendship is within all of our hands. (Maria Shriver)',
                        'To the world you may be just one person, but to one person you may be the world. (Dr. Seuss)'
                    ]);
                case 'Short and Sweet':
                    return pickRandom ([
                        'Friendship is the only cement that will ever hold the world together. (Woodrow T. Wilson)',
                        'A friend knows the song in my heart and sings it to me when my memory fails. (Donna Roberts)',
                        'It is the friends you can call up at 4 a.m. that matter. (Marlene Dietrich)',
                        'No friendship is an accident. (O. Henry)',
                        'Anything is possible when you have the right people there to support you. (Misty Copeland)',
                        'Sometimes being with your best friend is all the therapy you need. (Unknown)',
                        'Friends are the family you choose. (Jess C. Scott)',
                        'True friends are like diamonds — bright, beautiful, valuable, and always in style. (Nicole Richie)'
                    ]);
                case 'Funny':
                    return pickRandom ([
                        'Tis the privilege of friendship to talk nonsense, and to have her nonsense respected. (Charles Lamb)',
                        'There is nothing better than a friend, unless it is a friend with chocolate. (Linda Grayson)',
                        'Best friends do not care if your house is clean. They care if you have wine. (Unknown)',
                        'Best friends. Because if anyone else heard our conversations we would end up in the mental hospital. (unknown)',
                        'If you are ever lucky enough to find a weirdo, never let them go. (Matthew Gray Gubler)',
                        'We will be the old ladies causing trouble in the nursing home. (Unknown)',
                        'True friendship is when you walk into their house and your WiFi connects automatically. (Unknown)',
                        'We will be best friends forever because you already know too much. ()Unknown',
                        'Never let your best friends get lonely…keep disturbing them. (Candlelight Publications)'
                    ])
        }

            
        case 'business':
            switch (subtopic) {
                case 'General':
                    return pickRandom ([
                        'If you are passionate about something and you work hard, then I think you will be successful. (Pierre Omidyar, founder of Ebay)',
                        'The only thing worse than starting something and failing… is not starting something. (Seth Godin)',
                        'Business opportunities are like buses, there\’s always another one coming. (Richard Branson)',
                        'You only have to do a few things right in your life so long as you don\’t do too many things wrong. (Warren Buffett)',
                        'Often, the more money you make the more money you spend; that\’s why more money doesn\’t make you rich, assets make you rich. (Robert Kiyosaki)',
                        'The way to get started is to quit talking and begin doing (Walt Disney)',
                        'Money is like gasoline during a road trip. You don\’t want to run out of gas on your trip, but you\’re not doing a tour of gas stations. (Tim O\’Reilly)',
                        'Whether you think you can, or think you can\’t, you\’re right. (Henry Ford)',
                        'Risk more than others think is safe. Dream more than others think is practical. (Howard Schultz)'
                    ]);
                case 'Change':
                    return pickRandom ([
                        'The secret of change is to focus all your energy not on fighting the old but on building the new. (Socrates)',
                        'Nothing works better than just improving your product. (Joel Spolsky)',
                        'Anything that is measured and watched, improves. (Bob Parsons)',
                        'There are a lot of bad reasons to start a company. But there\’s only one good, legitimate reason, and I think you know what that is: to change the world. (Phil Libin)',
                        'If you are not embarrassed by the first version of your product, you\’ve launched too late. (Reid Hoffman)',
                        'Embrace what you don\’t know, especially in the beginning, because what you don\’t know can be your greatest asset. It ensures that you will absolutely be doing things different from everybody else. (Sara Blakely)',
                        'Every day that we spent not improving our products was a wasted day. (Joel Spolsky)'
                    ]);
                case 'Constraints':
                    return pickRandom ([
                        'Instead of freaking out about these constraints, embrace them. Let them guide you. Constraints drive innovation and force focus. Instead of trying to remove them, use them to your advantage. (37 Signals)',
                        'Tough times never last, but tough people do. (Robert H. Schuller)',
                        ' don\’t look to jump over 7-foot bars, I look for 1-foot bars that I can step over. (Warren Buffet)',
                        'You shouldn\’t focus on why you can\’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions. (Steve Case)'
                    ]);
                case 'Support':
                    return pickRandom ([
                        'Our chief want in life, is someone who shall make us do what we can. This is the service of a friend. With him, we are easily great. (Ralph Waldo Emerson)',
                        'There is nothing more beautiful than someone who goes out of their way to make life beautiful for others. (Mandy Hale)',
                        'The fastest way to change yourself is to hang out with people who are already the way you want to be. (Reid Hoffman)',
                        'Get five or six of your smartest friends in a room and ask them to rate your idea. (Mark Pincus)',
                        'No matter how brilliant your mind or strategy, if you\’re playing a solo game, you\’ll always lose out to a team. (Reid Hoffman)'
                    ])
                case 'Failure':
                    return pickRandom ([
                        'I have not failed. I\’ve just found 10,000 ways that won\’t work. (Thomas Edison)',
                        'Don\’t worry about failure; you only have to be right once. (Drew Houston)',
                        'The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow. (Ingvar Kamprad)',
                        'n the end, a vision without the ability to execute it is probably a hallucination. (Steve Case)',
                        'I know that if I failed I wouldn\’t regret that, but I knew the one thing I might regret is not trying. (Jeff Bezos)'
                    ])
                case 'Success':
                    return pickRandom ([
                        'Don\’t worry about being successful, but work towards being significant. The success will naturally follow. (Oprah Winfrey)',
                        'Make every detail perfect and limit the number of details to perfect. (Jack Dorsey)',
                        'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. (Steve Jobs)',
                        'When you find an idea that you just can\’t stop thinking about, that\’s probably a good one to persue. (Josh James)',
                        'Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. (Golda Meir)',
                        'Chase the vision not the money, the money will end up following you. (Tony Hsieh)',
                        'Get big quietly, so you don\’t tip off potential competitors. (Chris Dixon)',
                        'Some people dream of success, while other people get up every morning and make it happen. (Wayne Huizenga)',
                        'Diligence is the mother of good luck. Benjamin Franklin)',
                        'I\’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. (Steve Jobs)'
                    ])
                case 'Strife':
                    return pickRandom ([
                        'Every time we launch a feature, people yell at us. (Angelo Sotria)',
                        'Always look for the fool in the deal. If you don\’t find one, it\’s you. (Mark Cuban)',
                        'Your most unhappy customers are your greatest source of learning. (Bill Gates)',
                        'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. (Helen Keller)',
                        'Don\’t worry about people stealing your design work. Worry about the day they stop. (Jeffrey Zeldman)',
                        'You don\’t learn to walk by following rules. You learn by doing and falling over. (Richard Branson)',
                        'The credit belongs to the man who is actually in the arena; whose face is marred with dust and sweat; who strives valiantly, who errs and may fall again and again, because there is no effort without error or shortcoming. (Theodore Roosevelt)'
                    ])
        }

    }

}

const myTopic = pickRandom(arrTopics);
const mySubtopic =  pickSubtopic(myTopic);

console.log(generateQuote(myTopic, mySubtopic));
