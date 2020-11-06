#Group 6 Evaluation#
#„Twitter & Coronavirus: A conversation analysis”#
 
 
##Introduction##
 
This document is an evaluation for the project “Twitter & Coronavirus: A conversation analysis”, created for the Data Visualization Course in 2020.
 
The project team set a defined target groups for the project, those target groups will be later used by us for the Cognitive Walkthrough Method.
 
###Target Group:###
 
·  	General public who is keen in knowing the Corona Virus trend
 
Sadly, the project team did not provide a set of questions, that the project aims to answer, instead they had a potential questions on their “Idea” slide which goes as follows:
 
“The COVID-19 pandemic has changed our world. How has it changed our tweets?”.
 
##Cognitive Walkthrough Method##
 
Following the Cognitive Walkthrough Method[1] , we will walk through the project with the help of a fictional user, that is part of the previously defined target group. With this approach we will evaluate if the visualizations match the declared domain of the project and if it answers the provided question. Further we will use the streamlined method proposed by Spencer in 2000, since using the standard approach would balloon the evaluation to an unfitting size.
 
###Fictional User###
 
The fictional user is part of the target group. Therefore, the user is a person, that is not strongly classified in a specific group but is interested in the trends happening on Twitter and as a consequence we define the fictional user as a young user, that is between the age of 20-30, who has a good understanding of technology and specifically online technology.
 
 
 
###Short Story###
 
The users first impression is the landing view. The page looks tidy and not too overloaded, using a similar color scheme to Twitter. 
 
First visualization is a comparison of total COVID tweets and the tweets from the sample dataset. Hovering the graphic, the user can compare the total and the sample data points. The graph for total tweets is valuable, as it shows the rise of engagement on the topic coming into march, while the sample graph gives no value at all, since the dataset is randomized and capped at about 13500. This would distract the user and potentially makes her unable to gather insights.

Second and third visualizations are comparisons between the total COVID tweets and the articles published by CNN & FOX in the second and the total COVID tweets and key data about the pandemic, including new deaths, cases and tests in the third.
While a correlation between the data points in the third visualization is easy to grasp and digest, the second visualization is way more difficult to draw conclusions from, especially due to the article counts behaving similar to a sinus curve. Also the labels of the graphics are hard to read, due to the colors being used for the labels, instead of a legend.

Fourth, fifth and sixth visualizations are comparisons of five keywords and their popularity in the sample dataset over time. Hovering gives the keyword name and the exact appearance count, providing a good overview and good insights, on the rise and fall of prominence for given keywords.

Seventh visualization shows the usage of the keyword “chinese virus”, before and after it got used by Donald Trump. It’s easy to understand, that Trump set the trend for the keyword to go viral and how it influenced Twitter.

Eighth and ninth visualizations produce graphs for two given inputs. The eighth  compares two graphs that represent two given keywords and the ninth compares two graphs, where the first represents total tweets and other metrics from prior visualizations and the second represents a given keyword. 
Those visualizations are great to get creative and dive deeper into the data.

The tenth visualization showcases a set of words, that have been found in Tweets from the dataset, which are in relations to each other. The relations are visualized as a graph network, in which the width of the edges show the number of times, the two connected nodes appeared together, and the width of the node show the number of times, the word was found in general.


There is no clear indication, that the visualization is in-fact static and immutable. So, the user might try to click around the nodes and edges first and might even think, that the graphic is broken and therefore, has no value.
Another issue is the legend, an  # is a valid sign in the sphere of mathematics and Computer Science, but will most likely confuse non STEM users, especially when we look at Twitter data, since the # is used for a different very important aspect in the Twitter world.

The last visualization showcases a word cloud in the shape of the bird, that is on the Twitter logo. The words are the most used terms and phrases for a given day and the sizes of the words depend on the number of times, a word got mentioned.
These days change automatically, which can be stopped and resumed with two buttons on the top left.
The pausing is fine, but the resume button is labeled as a start button, which might confuse the user.


##Validation##

Domain of the project is the correlation between COVID-19 and Twitter. With different visualizations the project tries to showcase the changes in tweets and trends on the plattform.

The data used comes from two main sources, the first one being OurWorldInData, which provided data such as case/test/death numbers and the second main source is a github repo from a UCD Challenge which provided the sample dataset, which contained the data about keywords and their usage in tweets from January to April.

Regarding visual encoding and interaction, multiple things caught our attention.

The second and third visualization, had colored labels which matched the plots, instead of a legion, which worsened the readability of the labels.

The ninth visualization suffers with a similar issue as the second and third, regarding the Y-axis labeling.
The mapping of the drop down menues to the propery Y-axis and the color encoding of the plots are not understandable on first glance. Additionally sometimes the right Y-axis has a label (f.e. cnn-articles) and sometimes it does not.

The tenth visualization is a static graphic, with which you can’t interact with, which doesn’t match the prior visualizations. Also the legion is hard to spot and read.

The last visualization uses different colours which don’t match the differences in size and therefore, confuse the user.


##Improvement##

The first visualization shouldn’t show the plot for the sample dataset, which would in turn improve the efficiency of the log scale, or maybe even make it obsolete.

The ninth visualization should have some sort of information about the mapping between the drop down menus and the plots, and always use Y-axis labels or none at all, but be consistent.

The last visualization should use the same colour for all words, since the color does not encode any further information in the visualization.

In general, legions should be used instead of coloring the labels of the Y-axis, and maybe a closer look into font weights for readability should be considered.






 
 
 
 
 

