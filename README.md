# Impact of Covid-19 on mobility behaviour

A visualization of the mobility behaviour during the covid pandemic based on [Google mobility data](https://www.google.com/covid19/mobility/) in order to explore the impact of Covid-19 on mobility.

## Table of Contents

* [Project description](#project-description)
  * [Introduction](#intro)
  * [External Data](#external)
* [Design Decicions based on “Four Nested Levels of Visualization Design” by Munzner](#design)
  * [Domain problem characterization](#domain)
  * [Data / task abstraction](#abstraction)
  * [Visual encoding / interaction design](#encoding)
* [Possible Improvements](#impro)
* [Demo & hosted version](#manual)
* [Contributors](#contributors)

## <a name="project-description"></a> Project description
### <a name="intro"></a> Introduction 
Covid-19 is having a profound impact on everyday life, with intense repercussions in our socio-economic system. In an attempt to contain the spread of the virus, many countries have implemented restrictive measures such as lockdowns and social distancing.
Regarding mobility, in the containment phase it has been necessary to implement restrictions such as flights bans, prohibition of interregional travels or total isolation in own residence.
In this regard, Google has recently released a global public dataset showing how the number of visits changes in places like public transports, workplaces or residential places since February 2020.

The aim of this project is to analyze this data and provide a visualisation tool that shows the impact of the pandemic on the mobility for each german state. The main focus is to showcase the connection between mobility and COVID-19 by analyzing how the different types of mobility are affected by the number of infections.

###  <a name="external"></a> External data
-   [Google LLC "Google COVID-19 Community Mobility Reports"](https://www.google.com/covid19/mobility/) (Accessed: 23.10.2020): Global Dataset about the changes of mobility behaviour in 7 different place categories: retail and recreation, grocery and pharmacy, parks, transit stations, workplaces, residential places.
The data is derived from anonymous user data collected via Google Location History and is divided by countries, regions and cities.
The daily changes are compared with a reference value for the respective day of the week. Reference value is the median value from 3th January to 6th February.

-   [Robert-Koch-Institut - COVID-19 Database](https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html) (Accessed: 23.10.2020): Dataset with all publicly available data of german states including case numbers and hospitality rates. Data is derived from daily reports by the German Health Authorities.

-   DESTATIS - [Population by](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/bevoelkerung-nichtdeutsch-laender.html) state  (Accessed: 23.10.2020): Population of Germany on 31th December 2019 by nationality and state.

External libraries: [Altair](https://altair-viz.github.io/), [Geopandas](https://geopandas.org/)

##  <a name="design"></a> Design Decisions based on “Four Nested Levels of Visualization Design” by Munzner

### <a name="domain"></a> Domain problem characterization
The results of this analysis could lead to interesting insights to further investigate the effects of Covid-19 on other related aspects of mobility, such as CO2 emission.
The aim of this research however is just to provide a general overview of the mobility situation in Germany during the pandemic, referring to the „Mobility“ and „Public health“ domain.
Worth to mention is that mobility changes are identified by defining mobility as the amount of visitors in certain places on a given day. On the other hand, the number of covid-19 infections is encapsulated in the public health domain.

The visualizations are primarily intended for a generic target audience such as normal German citizens interested in investigating the effects of the pandemic on mobility. For this reason we have decided to keep a rather simple vocabulary using non-technical terminology. However, some specific term from the public health domain such as "7-day incidence" has been necessarily used.
In addition, another target group interested in the results of this analysis could be the mobility industry, which could take inspiration from these results to proceed with more in-depth analyzes.

Both target groups should be able to answer a common question through the proposed visualizations: How are the different types of mobility affected by the COVID-19 pandemic in Germany?


### <a name="abstraction"></a> Data / task abstraction
In order to answer the question identified above, two main task are addressed:
- identify patterns in the changes of different mobility types at national level
- analyze how the different types of mobility are influenced by the number of COVID-19 infections at regional level.

Identifying and analyzing the general trends between the number of cases and mobility changes is inevitably a high-level task, because the consequences that the increasing number of cases bring are not explicitly taken into account.

For this task, different data types are used: categorical, discrete and also discrete values presented in a continuous time fashion.
The categorical variables consist of mobility type and states, while discrete variables include the mobility changes, cases and dates.
As can be seen in the line charts, time dates are also presented as a continuous ordinal variable.


### <a name="encoding"></a> Visual encoding / interaction design
We decided to first provide an overview of the change in mobility per week across all german regions. We realized that with multiple heatmaps: one per place category.

#### Heatmap:
On the Y-Axis of the heatmap we decided to show the regions of germany and on the X-Axis the average change in mobility for a week compared to the base value. For a better readability we decided to display the X-Axis labels with a 45 degree angle. As show the Week numbers and therefore the label names are quite short it is still possible to correlate the label with the correct column on the heatmap.

To support the user for a proper interpretation of the values displayed on the heatmap we noted in the subtitle that these changes are relative to the average mobility between the 3rd of January and 6th of February.
To provide further information a tooltip displays the following information when the cursor hovers over a cell: The date range of the selected week, the selected region and the mobility change.

We decided to use a color gradient blue - green. We tried out diverging color schemes to better differentiate positive and negative values but as the data has no zero value for all place categories we decided not to use diverging color schemes. 

In the second part we decided to provide a more detailed view to compare the change in mobility over time for different categories of places for selected regions and to explore trends. We made it with a combination of interactive tree charts

In the second part we decided to provide a more detailed view in order to give the users the opportunity to compare the situation across different regions and to explore the related trends. This was accomplished with a combination of three interactive charts described below.

#### Choropleth Map:

The colors on the map encode the total number of COVID-19 infections over 100T inhabitants. 
By hovering the mouse over the map, the current region is highlighted in order to inform the user about the interactivity of the chart:  by clicking on the map it is possible then to select a certain region, whose data is shown in the 2 adjacent line charts.
An additional tooltip that displays the number of total infections over 100T inhabitants and the region name is provided. 

#### Line charts:

The first multiple line chart is showing the percentage of mobility changes compared to the base value. The place categories are categorical encoded by color and superimposed in one chart. 
The value are smoothed with a 7 day window while the non-smoothed values ​​are shown in the background with a reduced opacity.

The second line chart is showing the covid-19 infections for the selected region. The number of infections are given by the 7-day incidence per 100T inhabitants. 

To support the user with the task of comparing the mobility changes with the covid-infections, also a multi-line tooltip which shows up by clicking on one of the charts is provided. 
It consists of a vertical line superimposed on both charts. For the multi-line tooltip we superimpose the mobility-changes and covid-infections line charts with a vertical line on the point the click event happened, with circles at the points where the vertical line is intersecting the curves and a text which is showing the value from the curve. 

As a smaller number of items superimposed as line charts makes the visualization easier readable we implemented a legend where place categories can be selected and unselected. To make sure the user recognizes that this is possible we added a small text as a signifier saying “select place categories”.

To allow the user taking a more detailed look at the mobility changes for a specific time interval we implemented the feature where the user can select a time interval in the bottom chart (covid-infections) and change the scale of the top chart (mobility changes) to this time interval.

## <a name="impro"></a> Possible Improvements

Following possibilities for further improving the visualizations we identified:

- Improving overall performances of the Visualizations. The Map and Line charts are currently laggy.

- Currently there is no signifier for the multiline tooltip feature. If the user does not click on the visualization, it could be that the user may not notice this feature.

- When the multiline tooltip is used, the text showing the values for the mobility changes on the curves are overlapping if the values are very close together. This makes it difficult to read these values. Possible improvement would be to summarize these values in one tooltip.

- When selecting a region from the map there is currently no indication on which region is selected for the line chart view.

- When the user clicks on a free area outside of the germany map currently no region is selected. For handling the selection empty case with altair we found only the possibilities to either select nothing or all. Currently we choose the option nothing, what means that the line charts are empty. Better would be that a region is selected by default.

## <a name="manual"></a> Demo
[Video: screencast.mp4](screencast.mp4)

*A hosted version is available [here](https://petrit-vidishiqi.github.io/DataViz-COVID-and-Mobility/#s4)*

## <a name="contributors"></a> Contributors
Claudio Vindimian, Ali Bektas, Petrit Vidishiqi


