var apiKey = 'b9a00f78b2a4477296548fb14f189167';

var facebookURL = 'https://www.facebook.com/FrootyStudiosPvtLtd/?modal=admin_todo_tour';
var twitterURL = 'https://twitter.com/FrootyStudios';
var youtubeURL = 'https://www.youtube.com/channel/UCutyqdjysbH8GmTpefzJ8lA';

var dateLabel;

function FetchTheTopHeadlines_onTheBasisOfSource(categoryName){

    var apiURL = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=' +
    categoryName +
    '&apiKey=' + apiKey;

    var apiREQ = new Request(apiURL);

    fetch(apiREQ)
    .then((response) => response.json())
    .then((responseData) => generateHTML(responseData));

    const generateHTML = (data) => {

        console.log(data);

        var completeHTML = "";

        for(var i=0; i<data.articles.length; i++){
            var article = data.articles[i];

            if(article.urlToImage != "" && article.urlToImage != null )
            {
                const html = `
                <div class="Div Card">
                    <div class="ImagePanel">
                        <img class="Image Banner" src=${article.urlToImage} alt="news_IMGcal">
                    </div>
                    <div class="Label Heading">
                        <a href=${article.url} class="HeadingLink">${article.title}</a>
                    </div>
                    <div class="Label Description">
                        ${article.description}
                    </div>
                </div>
                `;
                
                completeHTML+=html;
            }

        }

        const containerDiv = document.querySelector(".news_stories_cards_container_div");
        containerDiv.innerHTML = completeHTML;
    }
}

function FetchTheHeadlines_WhichIncludesEverthing(){

    var apiURL = 'https://newsapi.org/v2/everything?q=general&pageSize=60&apiKey=' + apiKey;

    var apiREQ = new Request(apiURL);

    fetch(apiREQ)
    .then((response) => response.json())
    .then((responseData) => generateHTML(responseData));

    const generateHTML = (data) => {

        console.log(data);

        var completeHTML = "";

        for(var i=0; i<data.articles.length; i++){
            var article = data.articles[i];

            if(article.urlToImage != null)
            {
                const html = `
                <div class="headline_card_div">
                    <div class="Label HeadlineHeading">
                        <a href=${article.url} class="HeadingLink">${article.title}</a>
                    </div>
                    <div class="ImagePanel">
                        <img class="Image HeadlingBlockIMG" src=${article.urlToImage} alt="news_IMGcal">
                    </div>
                    <div class="headling_block_seperator"></div>
                    <div class="headling_block_seperator"></div>
                </div>
                `;
                    
                completeHTML+=html;
            }

        }

        const containerDiv = document.querySelector(".headline_cards_container_div");
        containerDiv.innerHTML = completeHTML;
    }
}

function FetchTheFlashNewa_WhichIncludesEverthing(){

    var apiURL = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=100&category=general&apiKey=' + apiKey;

    var apiREQ = new Request(apiURL);

    fetch(apiREQ)
    .then((response) => response.json())
    .then((responseData) => generateHTML(responseData));

    const generateHTML = (data) => {

        console.log(data);

        var completeHTML = "";

        for(var i=0; i<data.articles.length; i++){
            var article = data.articles[i];

            if(article.urlToImage != null)
            {
                const html = `
                <div class="flash_news-item">${article.title}</div>
                `;
                    
                completeHTML+=html;
            }

        }

        const containerDiv = document.querySelector(".flash_news-move");
        containerDiv.innerHTML = completeHTML;
    }
}

function AlertMsg(message){
    alert(message + " - page will be added soon.. maybe in the upcoming updates.");
}

function OnSocialButtonClicked(socialMediaName)
{
    var socialMediaURL = "";

    if(socialMediaName == "Facebook")
        socialMediaURL = facebookURL;
    else  if(socialMediaName == "Twitter")
        socialMediaURL = twitterURL;
    else  if(socialMediaName == "YouTube")
        socialMediaURL = youtubeURL;
    
    window.open(socialMediaURL);
}

window.onload = function(){
    var todayDate = new Date();
    dateLabel = document.querySelector('.date_label');
    dateLabel.textContent = todayDate.toDateString().replace(' ', ', ');
    
    FetchTheTopHeadlines_onTheBasisOfSource("general");
    FetchTheHeadlines_WhichIncludesEverthing();
    FetchTheFlashNewa_WhichIncludesEverthing();
};


