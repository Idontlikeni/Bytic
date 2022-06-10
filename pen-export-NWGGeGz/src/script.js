      $(document).ready(function () {
        const quizConfig = {
          showBackButton: true,
        };

        var quiz = [
          {
            id: 1,
            visible: true,
            title:
              "1. Are you taking this quiz for yourself or for a family/friend?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q1_a1",
                title: "Self",
              },
              {
                id: "q1_a2",
                title: "Friend or family member",
              },
            ],
          },
          {
            id: 2,
            visible: false,
            title:
              "2. When was the last time you hit your head, jostled your head, or experienced whiplash?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q2_a1",
                title: "Within the last 24 hours",
              },
              {
                id: "q2_a2",
                title: "Within the last two weeks",
              },
              {
                id: "q2_a3",
                title: "Within the last three months",
              },
              {
                id: "q2_a4",
                title: "Within the last year",
              },
              {
                id: "q2_a5",
                title: "More than a year ago",
              },
              {
                id: "q2_a6",
                title: "Never",
              },
            ],
          },
          {
            id: "2a",
            visible: false,
            title:
              "2a. In addition to your most recent injury, have you previously sustained a known or probable concussion?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q2a_a1",
                title: "Yes, within the last two weeks",
              },
              {
                id: "q2a_a2",
                title: "Yes, within the last three months",
              },
              {
                id: "q2a_a3",
                title: "Yes, within the last year",
              },
              {
                id: "q2a_a4",
                title: "Yes, more than a year ago",
              },
              {
                id: "q2a_a5",
                title: "No",
              },
            ],
          },
          {
            id: 3,
            visible: false,
            title:
              "3. Have you ever experienced anything that could cause brain trauma, including carbon monoxide poisoning, stroke, aneurysm, brain bleed, viral or bacterial meningitis, loss of oxygen to the brain…?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q3_a1",
                title: "Yes",
              },
              {
                id: "q3_a2",
                title: "No",
              },
              {
                id: "q3_a3",
                title: "Unsure",
              },
            ],
          },
          {
            id: 4,
            visible: false,
            title:
              "4. How many of the following symptoms do you have? Check any symptom you’ve experienced within the last week.",
            required: false,
            group_answers: true,
            answers: [
              {
                id: "q4_a1",
                title: "Balance problems",
                group: 2,
              },
              {
                id: "q4_a2",
                title: "Blood pressure changes",
                group: 4,
              },
              {
                id: "q4_a3",
                title: "Blurry vision",
                group: 1,
              },
              {
                id: "q4_a4",
                title: "Brain fog",
                group: 0,
              },
              {
                id: "q4_a5",
                title: "Change in or loss of taste",
                group: 4,
              },
              {
                id: "q4_a6",
                title: "Depression",
                group: 3,
              },
              {
                id: "q4_a7",
                title: "Difficulty concentrating",
                group: 0,
              },
              {
                id: "q4_a8",
                title: "Difficulty exercising",
                group: 2,
              },
              {
                id: "q4_a9",
                title: "Difficulty finding things",
                group: 0,
              },
              {
                id: "q4_a10",
                title: "Difficulty reading",
                group: 1,
              },
              {
                id: "q4_a11",
                title: "Distractibility",
                group: 0,
              },
              {
                id: "q4_a12",
                title: "Dizziness",
                group: 2,
              },
              {
                id: "q4_a13",
                title: "Easily feeling overwhelmed",
                group: 0,
              },
              {
                id: "q4_a14",
                title: "Fatigue",
                group: 0,
              },
              {
                id: "q4_a15",
                title: "Functional vision changes",
                group: 1,
              },
              {
                id: "q4_a16",
                title: "Gastrointestinal issues",
                group: 4,
              },
              {
                id: "q4_a17",
                title: "Headache",
                group: 1,
              },
              {
                id: "q4_a18",
                title: "Heart rate irregularities",
                group: 4,
              },
              {
                id: "q4_a19",
                title: "Irritability",
                group: 3,
              },
              {
                id: "q4_a20",
                title: "Low motivation",
                group: 3,
              },
              {
                id: "q4_a21",
                title: "Memory problems",
                group: 0,
              },
              {
                id: "q4_a22",
                title: "Nausea",
                group: 2,
              },
              {
                id: "q4_a23",
                title:
                  "Personality changes not otherwise mentioned in this list",
                  group: 3,
              },
              {
                id: "q4_a24",
                title: "Ringing ears",
                group: 2,
              },
              {
                id: "q4_a25",
                title: "Sensitivity to light",
                group: 1,
              },
              {
                id: "q4_a26",
                title: "Sensitivity to noise",
                group: 2,
              },
              {
                id: "q4_a27",
                title: "Sensitivity to temperatures",
                group: 4,
              },
              {
                id: "q4_a28",
                title: "Sleep disturbances",
                group: 0,
              },
              {
                id: "q4_a29",
                title: "Tired eyes",
                group: 4,
              },
              {
                id: "q4_a30",
                title: "Migraine",
                group: 0,
              },
              {
                id: "q4_a31",
                title: "Anxiety",
                group: 3,
              },
              {
                id: "q4_a32",
                title: "Sensitivity to screens",
                group: 1,
              },
            ],
          },
          {
            id: 5,
            visible: false,
            title: "5. Which of the following statements is most true for you?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q5_a1",
                title: "I had all of these symptoms before injuring my head.",
              },
              {
                id: "q5_a2",
                title: "I had many of these symptoms before injuring my head.",
              },
              {
                id: "q5_a3",
                title: "I had some of these symptoms before injuring my head.",
              },
              {
                id: "q5_a4",
                title:
                  "I did not have any of these symptoms before injuring my head.",
              },
            ],
          },
          {
            id: 6,
            visible: false,
            title: "6. Have your symptoms gotten better or worse with time?",
            required: true,
            group_answers: false,
            answers: [
              {
                id: "q6_a1",
                title: "They’ve been getting better.",
              },
              {
                id: "q6_a2",
                title: "They’ve stayed about the same.",
              },
              {
                id: "q6_a3",
                title: "They’ve gotten worse.",
              },
            ],
          },
        ];

        $.each(quiz, function (index, quiz) {
          var questionIndex = this.id;
          $(
            '<div class="quiz-item" id="quiz-item-' +
              this.id +
              '"><div class="question-title">' +
              this.title +
              " " +
              "</div> <div class='question-answers'>   <div class='question-grouped-answers'><div class='question-group-0'></div> <div class='question-group-1'></div> <div class='question-group-2'></div> <div class='question-group-3'></div> <div class='question-group-4'></div> </div>   </div> </div>"
          ).appendTo("#dd-quiz-do-i-have-a-concussion");

          $(".dd-continue-container").remove();

          $.each(this.answers, function (index, value) {
            var inputType = "radio";
            if (questionIndex == 4) {
              var inputType = "checkbox";
            }

            if (quiz.group_answers == true) {
              $(
              '<div class="question-answer grouped-answer"><input required="' +
                quiz.required +
                '" value="' +
                this.title +
                '" type="' +
                inputType +
                '" name="question_' +
                questionIndex +
                '" id="' +
                this.id +
                '" /> <label for="' +
                this.id +
                '">' +
                this.title +
                "</label></div>"
            ).appendTo("#quiz-item-" + questionIndex + " .question-answers .question-group-" + this.group);
            }

            if (quiz.group_answers == false) {
              $(
              '<div class="question-answer"><input required="' +
                quiz.required +
                '" value="' +
                this.title +
                '" type="' +
                inputType +
                '" name="question_' +
                questionIndex +
                '" id="' +
                this.id +
                '" /> <label for="' +
                this.id +
                '">' +
                this.title +
                "</label></div>"
            ).appendTo("#quiz-item-" + questionIndex + " .question-answers");
            }
          });
        });

        $.each($(".quiz-item"), function (index) {
          index++;
          if (index !== 7) {
            $(
              '<div class="dd-continue-container"><button type="button" data-id="' +
                index +
                '">Continue</button></div>'
            ).appendTo($(this));
          }
        });

        $(document).on("click", ".dd-continue-container button", function (e) {
          var selectedIndex = $(this).attr("data-id") - 1;
          console.log("selectedIndex: " + selectedIndex);

          var atleastOneAnswerIsChecked = false;
          if (
            $(this)
              .closest(".quiz-item")
              .find(".question-answers")
              .has("input:checked").length > 0
          ) {
            atleastOneAnswerIsChecked = true;
          } else {
            atleastOneAnswerIsChecked = false;
          }

          if (
            quiz[selectedIndex].required == true &&
            atleastOneAnswerIsChecked == false
          ) {
            alert("Please select an answer before continuing.");
            return;
          }

          quiz[selectedIndex].visible = false;

          if (
            $('[name="question_2"]:checked').val() &&
            $('[name="question_2"]:checked').val() == "Never" &&
            selectedIndex == 1
          ) {
            quiz[selectedIndex + 2].visible = true;
          } else {
            quiz[selectedIndex + 1].visible = true;
          }
          // console.log(quiz[selectedIndex + 1]);

          $.each(quiz, function () {
            if (this.visible == false) {
              $("#quiz-item-" + this.id).slideUp(444);
            } else {
              $("#quiz-item-" + this.id).slideDown(444);
              // console.log("true");
            }
          });
        });

        $('<button type="button" class="quiz-submit">Submit</button>').appendTo(
          "#quiz-item-6"
        );
        $(
          '<div id="quiz-result"><h2 class="quiz-result-title">Quiz Outcomes</h2><div id="quiz-result-content"></div></div>'
        ).appendTo("#dd-quiz-do-i-have-a-concussion");

        // if (
        //   $('[name="question_2"]:checked').val() &&
        //   $('[name="question_2"]:checked').val() != "Never"
        // ) {
        //   console.log("Not never");
        //   $("#quiz-item-2a").show();
        // } else {
        //   $("#quiz-item-2a").hide();
        // }

        $("body").on("click", "button.quiz-submit", function () {
          var recommendedArticlesCount = 0;
          
          if (
            $(this)
              .closest(".quiz-item")
              .find(".question-answers")
              .has("input:checked").length == 0
          ) {
            alert("Please select an answer before continuing.");
            return;
          } else {
            $("#quiz-item-6").slideUp(444);
          }

          $("#quiz-result").slideDown(444);
          $("#quiz-result #quiz-result-content").text('');

          if (
            $('[name="question_2"]:checked').val() &&
            $('[name="question_2"]:checked').val() == "Never" &&
            $('[name="question_3"]:checked').val() &&
            $('[name="question_3"]:checked').val() == "No"
          ) {
            $(
              "<div><p><b>You (probably) do not have a concussion.</b></p>\
                      A concussion is only possible if you’ve experienced some type of head trauma. Therefore, it is unlikely that you have a concussion. However, some patients have amnesia around the concussive event, so an extremely small fraction of patients can forget injuring themselves. If your symptoms persist, it’s still worth seeing a doctor. Whether or not a concussion is the cause, it’s hard to get better from bothersome symptoms if you don’t know what’s causing them.\
                      Keep in mind that these are generalized questions, so they’re not going to identify every concussion with 100% accuracy. When in doubt, opt to see a doctor.</div>"
            ).appendTo("#quiz-result-content");
          } else if (
            $('[name="question_2"]:checked').val() &&
            $('[name="question_2"]:checked').val() == "Never" &&
            $('[name="question_3"]:checked').val() &&
            $('[name="question_3"]:checked').val() == "Unsure"
          ) {
            $(
              "<div><p><b>You (probably) do not have a concussion.</b></p>\
              <p>A concussion is only possible if you’ve experienced some type of head trauma. Therefore, it is unlikely that you have a concussion. However, some patients have amnesia around the concussive event, so an extremely small fraction of patients can forget injuring themselves. If your symptoms persist, it’s still worth seeing a doctor. Whether or not a concussion is the cause, it’s hard to get better from bothersome symptoms if you don’t know what’s causing them.</p>\
              <p>Keep in mind that these are generalized questions, so they’re not going to identify every concussion with 100% accuracy. When in doubt, opt to see a doctor.</p>\
              <p>By the way, we’ve seen patients exhibit post-concussion syndrome from old brain injuries (not just former concussions). If your symptoms stem from previous brain trauma, we may be able to help you. <a href='http://cognitivefxusa.com/consultation' target='_blank'>Contact us for a free consultation</a>.</p>\
              </div>"
            ).appendTo("#quiz-result-content");
          }

          if (
            (
              $('[name="question_2"]:checked').val() == "Within the last 24 hours" ||
              $('[name="question_2"]:checked').val() == "Within the last two weeks" ||
              $('[name="question_2"]:checked').val() == "Within the last three months"
            ) &&
            (
              $('[name="question_2a"]:checked').val() == "No" || 
              $('[name="question_2a"]:checked').val() == "Yes, within the last two weeks"
            ) &&
            $('[name="question_3"]:checked').val() == "No"
          ) {
            if ($("#quiz-result-might-have-mild-traumatic").length == 0) {
              $(
                "<div id='quiz-result-might-have-mild-traumatic'><p><b>You could have a mild traumatic brain injury (acute concussion).</b></p> Based on your answers, it’s possible that you have a concussion from your recent head trauma. A majority of patients recover from concussion symptoms within two weeks of injury. Some take as many as three months to make a full recovery. If you still experience symptoms after three months (<a target='_blank' href='https://www.cognitivefxusa.com/blog/post-concussion-syndrome-and-post-concussion-symptoms-pcs'>post-concussion syndrome</a>), you are unlikely to recover without treatment. If that happens to you, return to our site for more information about your options.\
        In the meantime, you can read our post on how to treat a concussion. It will give you next-steps and information on how to increase your chances of a smooth recovery.</div>"
              ).appendTo("#quiz-result-content");
            }
          }

          if (
            ($('[name="question_2"]:checked').val() ==
              "Within the last 24 hours" ||
              $('[name="question_2"]:checked').val() ==
                "Within the last two weeks" ||
              $('[name="question_2"]:checked').val() ==
                "Within the last three months") &&
            ($('[name="question_2a"]:checked').val() == "No" || $('[name="question_2a"]:checked').val() == "Yes, within the last two weeks") &&
            ($('[name="question_3"]:checked').val() == "Yes" ||
              $('[name="question_3"]:checked').val() == "Unsure") &&
            $('[name="question_5"]:checked').val() !=
              "I did not have any of these symptoms before injuring my head."
          ) {
            if ($("#quiz-result-might-have-mild-traumatic").length == 0) {
              $(
                "<div id='quiz-result-might-have-mild-traumatic'><p><b>You could have a mild traumatic brain injury (acute concussion).</b></p> Based on your answers, it’s possible that you have a concussion from your recent head trauma. A majority of patients recover from concussion symptoms within two weeks of injury. Some take as many as three months to make a full recovery. If you still experience symptoms after three months (<a target='_blank' href='https://www.cognitivefxusa.com/blog/post-concussion-syndrome-and-post-concussion-symptoms-pcs'>post-concussion syndrome</a>), you are unlikely to recover without treatment. If that happens to you, return to our site for more information about your options.<br><br>\
                  In the meantime, you can read our post on how to treat a concussion. It will give you next-steps and information on how to increase your chances of a smooth recovery.<br><br>\
                  By the way, we've seen patients exhibit post - concussion syndrome from old brain injuries (not just former concussions). If your symptoms stem from previous brain trauma, we may be able to help you. <a target='_blank' href='http://cognitivefxusa.com/consultation'>Contact us for a free consultation.</a></div>"
              ).appendTo("#quiz-result-content");
            }
          }

          if (
            (
              $('[name="question_2"]:checked').val() == "Within the last year" || 
              $('[name="question_2"]:checked').val() == "More than a year ago"
            ) ||
            (
              $('[name="question_2"]:checked').val() == "Within the last 24 hours" || 
              $('[name="question_2"]:checked').val() == "Within the last two weeks" || 
              $('[name="question_2"]:checked').val() == "Within the last three months"
            ) &&
            (
              $('[name="question_2a"]:checked').val() == "Yes, within the last three months" || 
              $('[name="question_2a"]:checked').val() == "Yes, within the last year" || 
              $('[name="question_2a"]:checked').val() == "Yes, more than a year ago"
            )
          ) {
            if ($("quiz-result-might-have-post-concussion").length == 0) {
              $(
                "<div id='quiz-result-might-have-post-concussion'><p><b>You might have post-concussion syndrome.</b></p> Around 10-20% of patients who sustain a concussion have lingering symptoms that won’t go away without treatment. Brain trauma other than concussion can sometimes cause lingering concussion-like symptoms as well. Since it’s been more than three months since your first brain injury, you may have <a target='_blank' href='https://www.cognitivefxusa.com/blog/post-concussion-syndrome-and-post-concussion-symptoms-pcs'>post-concussion syndrome</a>.\
                  You can learn more by skipping to the section on what to do if your symptoms aren’t going away. You can also <a target='_blank' href='http://cognitivefxusa.com/consultation'>sign up for a free consultation</a> to discuss your experience with our staff.</div>"
              ).appendTo("#quiz-result-content");
            }
          }

          // Recommended reading section
          if (
            $('[name="question_1"]:checked').val() &&
            $('[name="question_2"]:checked').val() &&
            $('[name="question_3"]:checked').val() &&
            // $('[name="question_4"]:checked').val() &&
            $('[name="question_5"]:checked').val() &&
            $('[name="question_6"]:checked').val()
          ) {
            $(
              "<div id='recommended-reading'><p><b>Recommended reading based on your reported symptoms.</b></p> <p>Based on your answers, we recommend the following blog posts for additional information:</p></div>"
            ).appendTo("#quiz-result-content");
          }

          if (
            ($('[name="question_2"]:checked').val() &&
              $('[name="question_2a"]:checked').val() ==
                "Yes, within the last two weeks") ||
            ($('[name="question_2"]:checked').val() &&
              $('[name="question_2a"]:checked').val() ==
                "Yes, within the last three months") ||
            ($('[name="question_2"]:checked').val() &&
              $('[name="question_2a"]:checked').val() ==
                "Yes, within the last year") ||
            ($('[name="question_2"]:checked').val() &&
              $('[name="question_2a"]:checked').val() ==
                "Yes, more than a year ago") ||
            ($('[name="question_3"]:checked').val() &&
              $('[name="question_3"]:checked').val() == "Yes")
          ) {
            $(
              '<li class="recommended-reading-item">Because you jostled your head OR experienced anything that could cause brain trauma: <a target="_blank" href="https://www.cognitivefxusa.com/blog/multiple-concussions-effects-and-treatment">https://www.cognitivefxusa.com/blog/multiple-concussions-effects-and-treatment</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a17"]:checked').val() &&
            $('[id="q4_a17"]:checked').val() == "Headache"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced headaches: <a target="_blank" href="https://www.cognitivefxusa.com/blog/concussion-headaches-and-post-concussion-headaches">https://www.cognitivefxusa.com/blog/concussion-headaches-and-post-concussion-headaches</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            ($('[id="q4_a3"]:checked').val() &&
              $('[id="q4_a3"]:checked').val() == "Blurry Vision") ||
            ($('[id="q4_a15"]:checked').val() &&
              $('[id="q4_a15"]:checked').val() == "Functional vision changes")
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced blurry vision and/or functional vision changes: <a target="_blank" href="https://www.cognitivefxusa.com/blog/vision-problems-after-concussion">https://www.cognitivefxusa.com/blog/vision-problems-after-concussion</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a28"]:checked').val() &&
            $('[id="q4_a28"]:checked').val() == "Sleep disturbances"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced sleep disturbances: <a target="_blank" href="https://www.cognitivefxusa.com/blog/post-concussion-syndrome-sleep-what-to-do">https://www.cognitivefxusa.com/blog/post-concussion-syndrome-sleep-what-to-do</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a14"]:checked').val() &&
            $('[id="q4_a14"]:checked').val() == "Fatigue"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced fatigue: <a target="_blank" href="https://www.cognitivefxusa.com/blog/post-concussion-syndrome-extreme-fatigue-how-to-recover">https://www.cognitivefxusa.com/blog/post-concussion-syndrome-extreme-fatigue-how-to-recover</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a8"]:checked').val() &&
            $('[id="q4_a8"]:checked').val() == "Difficulty exercising"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced difficulty exercising: <a target="_blank" href="https://www.cognitivefxusa.com/blog/exercise-after-a-concussion">https://www.cognitivefxusa.com/blog/exercise-after-a-concussion</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a25"]:checked').val() &&
            $('[id="q4_a25"]:checked').val() == "Sensitivity to light"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced sensitivity to light: <a target="_blank" href="https://www.cognitivefxusa.com/blog/light-sensitivity-causes-and-concussion-deep-dive">https://www.cognitivefxusa.com/blog/light-sensitivity-causes-and-concussion-deep-dive</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            ($('[id="q4_a11"]:checked').val() &&
              $('[id="q4_a11"]:checked').val() == "Distractibility") ||
            ($('[id="q4_a7"]:checked').val() &&
              $('[id="q4_a7"]:checked').val() == "Difficulty concentrating")
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced distractibility OR difficulty concentrating: <a target="_blank" href="https://www.cognitivefxusa.com/blog/concussions-and-attention-deficit-disorder">https://www.cognitivefxusa.com/blog/concussions-and-attention-deficit-disorder</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a4"]:checked').val() &&
            $('[id="q4_a4"]:checked').val() == "Brain fog"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced brain fog: <a target="_blank" href="https://www.cognitivefxusa.com/blog/post-concussion-brain-fog-months-later">https://www.cognitivefxusa.com/blog/post-concussion-brain-fog-months-later</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[id="q4_a22"]:checked').val() &&
            $('[id="q4_a22"]:checked').val() == "Nausea"
          ) {
            $(
              '<li class="recommended-reading-item">Because you experienced nausea: <a target="_blank" href="https://www.cognitivefxusa.com/blog/post-concussion-nausea-what-to-do">https://www.cognitivefxusa.com/blog/post-concussion-nausea-what-to-do</a></li>'
            ).appendTo("#quiz-result-content #recommended-reading");
            recommendedArticlesCount++;
          }

          if (
            $('[name="question_1"]:checked').val() &&
            $('[name="question_2"]:checked').val() &&
            $('[name="question_3"]:checked').val() &&
            // $('[name="question_4"]:checked').val() &&
            $('[name="question_5"]:checked').val() &&
            $('[name="question_6"]:checked').val()
          ) {
            $(
              '<p id="recommended-reading-outro">We publish new content regularly and will cover more symptoms and related topics in time.</p>'
            ).appendTo("#quiz-result-content #recommended-reading");
          }

          if (
            $('[id="q6_a3"]:checked').val() &&
            $('[id="q6_a3"]:checked').val() == "They’ve gotten worse."
          ) {
            $(
              "<p><b>P.S.</b> — Since you mentioned your symptoms are getting worse, we highly recommend seeking medical attention. Worsening symptoms could indicate a more serious problem that needs to be diagnosed and fixed.</p> <p>Alternatively, it could be that your symptoms are creating a vicious cycle (for example, headaches keep you from sleeping, lack of sleep results in headaches, and so forth). It’s important to find out what’s happening so you can stay safe and get some symptom relief.</p>"
            ).insertBefore("#quiz-result-content #recommended-reading");
          }

          if (recommendedArticlesCount == 0) {
            $("<div id='no-recommended-reading'><p><b>We could not recommend any reading based on your reported symptoms.</b></p></div>").insertAfter('#recommended-reading');
            $('#recommended-reading').hide();
          }

          if (
            $('[name="question_1"]:checked').val() &&
            $('[name="question_2"]:checked').val() &&
            $('[name="question_3"]:checked').val() &&
            // $('[name="question_4"]:checked').val() &&
            $('[name="question_5"]:checked').val() &&
            $('[name="question_6"]:checked').val()
          ) {
            console.log("form is filled");
          } else {
          }
        });

        $(
          "#quiz-item-2, #quiz-item-3, #quiz-item-2a, #quiz-item-4, #quiz-item-5, #quiz-item-6"
        ).hide();
      }); // end document ready