require 'sinatra'
require 'byebug'

enable :sessions

before do
    if session["solved_puzzles"].nil?
        session["solved_puzzles"] = {
            "/level_secured.html" => false       
        }
    end

    if session["solved_puzzles"].key?(request.path) && !session["solved_puzzles"][request.path]
        halt 403
    end
end

get('/') do
    File.read(File.join("site","credentials_form.html"))
end

post('/level_secured') do
    if params["username"] == "omg" && params["password"] == "omg"
        session["solved_puzzles"]["/level_secured.html"] = true
        redirect('/level_secured.html')
    end
end


get "/level_secured.html" do
    File.read(File.join("site", "level_secured.html"))
end

get /level.*/ do
end

get('/omg') do
    session["test"] = "Linus"
end

get('/wtf') do
    return "<h1>" + session["test"] + "</h1>"
end