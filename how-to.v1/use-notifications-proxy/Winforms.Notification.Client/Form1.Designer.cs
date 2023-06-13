namespace Winfowms.Notification.Client_v1
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.panel1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.btnUserInputNotification = new System.Windows.Forms.Button();
            this.btnSimpleNotification = new System.Windows.Forms.Button();
            this.btnConnectToChannel = new System.Windows.Forms.Button();
            this.txtStatus = new System.Windows.Forms.TextBox();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.btnUserInputNotification);
            this.panel1.Controls.Add(this.btnSimpleNotification);
            this.panel1.Controls.Add(this.btnConnectToChannel);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(594, 151);
            this.panel1.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(569, 6);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(19, 13);
            this.label1.TabIndex = 3;
            this.label1.Text = "v1";
            // 
            // btnUserInputNotification
            // 
            this.btnUserInputNotification.Location = new System.Drawing.Point(36, 103);
            this.btnUserInputNotification.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnUserInputNotification.Name = "btnUserInputNotification";
            this.btnUserInputNotification.Size = new System.Drawing.Size(211, 20);
            this.btnUserInputNotification.TabIndex = 2;
            this.btnUserInputNotification.Text = "Send Notification - User Input";
            this.btnUserInputNotification.UseVisualStyleBackColor = true;
            this.btnUserInputNotification.Click += new System.EventHandler(this.btnUserInputNotification_Click);
            // 
            // btnSimpleNotification
            // 
            this.btnSimpleNotification.Location = new System.Drawing.Point(36, 65);
            this.btnSimpleNotification.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnSimpleNotification.Name = "btnSimpleNotification";
            this.btnSimpleNotification.Size = new System.Drawing.Size(211, 20);
            this.btnSimpleNotification.TabIndex = 1;
            this.btnSimpleNotification.Text = "Send Simple Notification";
            this.btnSimpleNotification.UseVisualStyleBackColor = true;
            this.btnSimpleNotification.Click += new System.EventHandler(this.btnSimpleNotification_Click);
            // 
            // btnConnectToChannel
            // 
            this.btnConnectToChannel.Location = new System.Drawing.Point(36, 30);
            this.btnConnectToChannel.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnConnectToChannel.Name = "btnConnectToChannel";
            this.btnConnectToChannel.Size = new System.Drawing.Size(211, 20);
            this.btnConnectToChannel.TabIndex = 0;
            this.btnConnectToChannel.Text = "Connect To Channel";
            this.btnConnectToChannel.UseVisualStyleBackColor = true;
            this.btnConnectToChannel.Click += new System.EventHandler(this.btnConnectToChannel_Click);
            // 
            // txtStatus
            // 
            this.txtStatus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.txtStatus.Location = new System.Drawing.Point(0, 151);
            this.txtStatus.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtStatus.Multiline = true;
            this.txtStatus.Name = "txtStatus";
            this.txtStatus.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtStatus.Size = new System.Drawing.Size(594, 208);
            this.txtStatus.TabIndex = 1;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(594, 359);
            this.Controls.Add(this.txtStatus);
            this.Controls.Add(this.panel1);
            this.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.Name = "Form1";
            this.Text = "Form1";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnUserInputNotification;
        private System.Windows.Forms.Button btnSimpleNotification;
        private System.Windows.Forms.Button btnConnectToChannel;
        private System.Windows.Forms.TextBox txtStatus;
    }
}

