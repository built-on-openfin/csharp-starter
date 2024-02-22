
namespace OpenFin.Interop.Win.Sample
{
    partial class MainWindow
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainWindow));
            statusStrip = new System.Windows.Forms.StatusStrip();
            openFinStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            orderStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            label4 = new System.Windows.Forms.Label();
            contextTypeDropDown = new System.Windows.Forms.ComboBox();
            ContextInputLabel = new System.Windows.Forms.Label();
            ContextItemComboBox = new System.Windows.Forms.ComboBox();
            label2 = new System.Windows.Forms.Label();
            contextGroupComboBox = new System.Windows.Forms.ComboBox();
            label3 = new System.Windows.Forms.Label();
            interopBrokerInput = new System.Windows.Forms.TextBox();
            receivedInstrument = new System.Windows.Forms.Label();
            receivedContext = new System.Windows.Forms.Label();
            embeddedViewPanel = new System.Windows.Forms.Panel();
            separator = new System.Windows.Forms.Label();
            label1 = new System.Windows.Forms.Label();
            pictureBox1 = new System.Windows.Forms.PictureBox();
            panelUnderline = new System.Windows.Forms.Panel();
            label5 = new System.Windows.Forms.Label();
            submitContextButton = new System.Windows.Forms.Button();
            connectToBrokerButton = new System.Windows.Forms.Button();
            createBrokerButton = new System.Windows.Forms.Button();
            panelButtons = new System.Windows.Forms.Panel();
            fireIntent = new System.Windows.Forms.Button();
            statusStrip.SuspendLayout();
            tableLayoutPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            panelUnderline.SuspendLayout();
            panelButtons.SuspendLayout();
            SuspendLayout();
            // 
            // statusStrip
            // 
            statusStrip.BackColor = System.Drawing.Color.FromArgb(30, 31, 35);
            statusStrip.ImageScalingSize = new System.Drawing.Size(24, 24);
            statusStrip.Items.AddRange(new System.Windows.Forms.ToolStripItem[] { openFinStatusLabel, orderStatusLabel });
            statusStrip.Location = new System.Drawing.Point(0, 1170);
            statusStrip.Name = "statusStrip";
            statusStrip.Padding = new System.Windows.Forms.Padding(2, 0, 30, 0);
            statusStrip.Size = new System.Drawing.Size(1307, 42);
            statusStrip.TabIndex = 0;
            // 
            // openFinStatusLabel
            // 
            openFinStatusLabel.ForeColor = System.Drawing.Color.White;
            openFinStatusLabel.Name = "openFinStatusLabel";
            openFinStatusLabel.Size = new System.Drawing.Size(257, 32);
            openFinStatusLabel.Text = "OpenFin Disconnected";
            // 
            // orderStatusLabel
            // 
            orderStatusLabel.Name = "orderStatusLabel";
            orderStatusLabel.Size = new System.Drawing.Size(0, 32);
            // 
            // tableLayoutPanel1
            // 
            tableLayoutPanel1.AutoSize = true;
            tableLayoutPanel1.ColumnCount = 3;
            tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 325F));
            tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 325F));
            tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 613F));
            tableLayoutPanel1.Controls.Add(label4, 0, 0);
            tableLayoutPanel1.Controls.Add(contextTypeDropDown, 0, 1);
            tableLayoutPanel1.Controls.Add(ContextInputLabel, 0, 2);
            tableLayoutPanel1.Controls.Add(ContextItemComboBox, 0, 3);
            tableLayoutPanel1.Controls.Add(label2, 1, 0);
            tableLayoutPanel1.Controls.Add(contextGroupComboBox, 1, 1);
            tableLayoutPanel1.Controls.Add(label3, 1, 2);
            tableLayoutPanel1.Controls.Add(interopBrokerInput, 1, 3);
            tableLayoutPanel1.Controls.Add(receivedInstrument, 2, 0);
            tableLayoutPanel1.Controls.Add(receivedContext, 2, 1);
            tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Top;
            tableLayoutPanel1.Location = new System.Drawing.Point(0, 111);
            tableLayoutPanel1.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            tableLayoutPanel1.Name = "tableLayoutPanel1";
            tableLayoutPanel1.Padding = new System.Windows.Forms.Padding(22, 21, 22, 21);
            tableLayoutPanel1.RowCount = 4;
            tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 53F));
            tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 53F));
            tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 53F));
            tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 53F));
            tableLayoutPanel1.Size = new System.Drawing.Size(1307, 254);
            tableLayoutPanel1.TabIndex = 4;
            // 
            // label4
            // 
            label4.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            label4.AutoSize = true;
            label4.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            label4.ForeColor = System.Drawing.Color.White;
            label4.Location = new System.Drawing.Point(22, 36);
            label4.Margin = new System.Windows.Forms.Padding(0, 6, 7, 6);
            label4.Name = "label4";
            label4.Size = new System.Drawing.Size(164, 32);
            label4.TabIndex = 5;
            label4.Text = "Context Type";
            // 
            // contextTypeDropDown
            // 
            contextTypeDropDown.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            contextTypeDropDown.FormattingEnabled = true;
            contextTypeDropDown.Items.AddRange(new object[] { "Instrument", "Contact", "Organization" });
            contextTypeDropDown.Location = new System.Drawing.Point(29, 83);
            contextTypeDropDown.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            contextTypeDropDown.Name = "contextTypeDropDown";
            contextTypeDropDown.Size = new System.Drawing.Size(277, 40);
            contextTypeDropDown.TabIndex = 6;
            contextTypeDropDown.SelectedIndexChanged += contextTypeDropDown_SelectedIndexChanged;
            // 
            // ContextInputLabel
            // 
            ContextInputLabel.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            ContextInputLabel.AutoSize = true;
            ContextInputLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            ContextInputLabel.ForeColor = System.Drawing.Color.White;
            ContextInputLabel.Location = new System.Drawing.Point(22, 142);
            ContextInputLabel.Margin = new System.Windows.Forms.Padding(0, 6, 7, 6);
            ContextInputLabel.Name = "ContextInputLabel";
            ContextInputLabel.Size = new System.Drawing.Size(141, 32);
            ContextInputLabel.TabIndex = 7;
            ContextInputLabel.Text = "Instrument";
            ContextInputLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // ContextItemComboBox
            // 
            ContextItemComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            ContextItemComboBox.FormattingEnabled = true;
            ContextItemComboBox.Items.AddRange(new object[] { "AAPL", "CSCO", "IBM", "MSFT", "TSLA" });
            ContextItemComboBox.Location = new System.Drawing.Point(29, 189);
            ContextItemComboBox.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            ContextItemComboBox.Name = "ContextItemComboBox";
            ContextItemComboBox.Size = new System.Drawing.Size(277, 40);
            ContextItemComboBox.TabIndex = 8;
            // 
            // label2
            // 
            label2.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            label2.AutoSize = true;
            label2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            label2.ForeColor = System.Drawing.Color.White;
            label2.Location = new System.Drawing.Point(347, 36);
            label2.Margin = new System.Windows.Forms.Padding(0, 6, 7, 6);
            label2.Name = "label2";
            label2.Size = new System.Drawing.Size(182, 32);
            label2.TabIndex = 9;
            label2.Text = "Context Group";
            // 
            // contextGroupComboBox
            // 
            contextGroupComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            contextGroupComboBox.Enabled = false;
            contextGroupComboBox.FormattingEnabled = true;
            contextGroupComboBox.Items.AddRange(new object[] { "N/A" });
            contextGroupComboBox.Location = new System.Drawing.Point(354, 83);
            contextGroupComboBox.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            contextGroupComboBox.Name = "contextGroupComboBox";
            contextGroupComboBox.Size = new System.Drawing.Size(277, 40);
            contextGroupComboBox.TabIndex = 10;
            contextGroupComboBox.SelectedIndexChanged += contextGroupComboBox_SelectedIndexChanged;
            // 
            // label3
            // 
            label3.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            label3.AutoSize = true;
            label3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            label3.ForeColor = System.Drawing.Color.White;
            label3.Location = new System.Drawing.Point(347, 142);
            label3.Margin = new System.Windows.Forms.Padding(0, 6, 7, 6);
            label3.Name = "label3";
            label3.Size = new System.Drawing.Size(182, 32);
            label3.TabIndex = 11;
            label3.Text = "Interop Broker";
            // 
            // interopBrokerInput
            // 
            interopBrokerInput.Location = new System.Drawing.Point(354, 189);
            interopBrokerInput.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            interopBrokerInput.MinimumSize = new System.Drawing.Size(4, 38);
            interopBrokerInput.Name = "interopBrokerInput";
            interopBrokerInput.PlaceholderText = "workspace-platform-starter";
            interopBrokerInput.Size = new System.Drawing.Size(279, 39);
            interopBrokerInput.TabIndex = 12;
            interopBrokerInput.TextChanged += interopBrokerInput_TextChanged;
            interopBrokerInput.Leave += interopBrokerInput_Leave;
            // 
            // receivedInstrument
            // 
            receivedInstrument.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            receivedInstrument.AutoSize = true;
            receivedInstrument.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            receivedInstrument.ForeColor = System.Drawing.Color.White;
            receivedInstrument.Location = new System.Drawing.Point(672, 36);
            receivedInstrument.Margin = new System.Windows.Forms.Padding(0, 6, 7, 6);
            receivedInstrument.Name = "receivedInstrument";
            receivedInstrument.Size = new System.Drawing.Size(115, 32);
            receivedInstrument.TabIndex = 13;
            receivedInstrument.Text = "Received";
            // 
            // receivedContext
            // 
            receivedContext.AutoSize = true;
            receivedContext.ForeColor = System.Drawing.Color.White;
            receivedContext.Location = new System.Drawing.Point(679, 74);
            receivedContext.Margin = new System.Windows.Forms.Padding(7, 0, 7, 0);
            receivedContext.Name = "receivedContext";
            receivedContext.Size = new System.Drawing.Size(95, 32);
            receivedContext.TabIndex = 14;
            receivedContext.Text = "Not Set";
            // 
            // embeddedViewPanel
            // 
            embeddedViewPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            embeddedViewPanel.Location = new System.Drawing.Point(0, 450);
            embeddedViewPanel.Margin = new System.Windows.Forms.Padding(2);
            embeddedViewPanel.Name = "embeddedViewPanel";
            embeddedViewPanel.Padding = new System.Windows.Forms.Padding(22, 21, 22, 21);
            embeddedViewPanel.Size = new System.Drawing.Size(1307, 762);
            embeddedViewPanel.TabIndex = 5;
            // 
            // separator
            // 
            separator.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            separator.Dock = System.Windows.Forms.DockStyle.Top;
            separator.Location = new System.Drawing.Point(0, 109);
            separator.Margin = new System.Windows.Forms.Padding(0);
            separator.Name = "separator";
            separator.Size = new System.Drawing.Size(1307, 2);
            separator.TabIndex = 3;
            separator.Text = "label5";
            // 
            // label1
            // 
            label1.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            label1.AutoSize = true;
            label1.Font = new System.Drawing.Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            label1.ForeColor = System.Drawing.Color.White;
            label1.Location = new System.Drawing.Point(2, 17);
            label1.Margin = new System.Windows.Forms.Padding(0);
            label1.Name = "label1";
            label1.Padding = new System.Windows.Forms.Padding(22, 0, 22, 0);
            label1.Size = new System.Drawing.Size(536, 51);
            label1.TabIndex = 2;
            label1.Text = "WinForm Interop Example";
            // 
            // pictureBox1
            // 
            pictureBox1.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
            pictureBox1.Image = Properties.Resources.icon_blue;
            pictureBox1.Location = new System.Drawing.Point(1209, 23);
            pictureBox1.Margin = new System.Windows.Forms.Padding(2);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new System.Drawing.Size(69, 68);
            pictureBox1.TabIndex = 9;
            pictureBox1.TabStop = false;
            // 
            // panelUnderline
            // 
            panelUnderline.Controls.Add(label5);
            panelUnderline.Controls.Add(pictureBox1);
            panelUnderline.Controls.Add(label1);
            panelUnderline.Dock = System.Windows.Forms.DockStyle.Top;
            panelUnderline.Location = new System.Drawing.Point(0, 0);
            panelUnderline.Margin = new System.Windows.Forms.Padding(2);
            panelUnderline.Name = "panelUnderline";
            panelUnderline.Size = new System.Drawing.Size(1307, 109);
            panelUnderline.TabIndex = 1;
            // 
            // label5
            // 
            label5.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
            label5.AutoSize = true;
            label5.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            label5.ForeColor = System.Drawing.Color.White;
            label5.Location = new System.Drawing.Point(6, 66);
            label5.Margin = new System.Windows.Forms.Padding(0);
            label5.Name = "label5";
            label5.Padding = new System.Windows.Forms.Padding(22, 0, 22, 0);
            label5.Size = new System.Drawing.Size(607, 30);
            label5.TabIndex = 10;
            label5.Text = "Demonstrate interop with OpenFin in a native application";
            // 
            // submitContextButton
            // 
            submitContextButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            submitContextButton.BackColor = System.Drawing.Color.FromArgb(79, 77, 255);
            submitContextButton.Enabled = false;
            submitContextButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            submitContextButton.ForeColor = System.Drawing.Color.White;
            submitContextButton.Location = new System.Drawing.Point(493, 11);
            submitContextButton.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            submitContextButton.Name = "submitContextButton";
            submitContextButton.Size = new System.Drawing.Size(206, 53);
            submitContextButton.TabIndex = 18;
            submitContextButton.Text = "Submit Context";
            submitContextButton.UseVisualStyleBackColor = false;
            submitContextButton.Click += submitContextButton_Click;
            // 
            // connectToBrokerButton
            // 
            connectToBrokerButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            connectToBrokerButton.BackColor = System.Drawing.Color.FromArgb(79, 77, 255);
            connectToBrokerButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            connectToBrokerButton.ForeColor = System.Drawing.Color.White;
            connectToBrokerButton.Location = new System.Drawing.Point(28, 11);
            connectToBrokerButton.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            connectToBrokerButton.Name = "connectToBrokerButton";
            connectToBrokerButton.Size = new System.Drawing.Size(230, 53);
            connectToBrokerButton.TabIndex = 16;
            connectToBrokerButton.Text = "Connect To Broker";
            connectToBrokerButton.UseVisualStyleBackColor = false;
            connectToBrokerButton.Click += connectToBrokerButton_Click;
            // 
            // createBrokerButton
            // 
            createBrokerButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            createBrokerButton.BackColor = System.Drawing.Color.FromArgb(79, 77, 255);
            createBrokerButton.Enabled = false;
            createBrokerButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            createBrokerButton.ForeColor = System.Drawing.Color.White;
            createBrokerButton.Location = new System.Drawing.Point(288, 11);
            createBrokerButton.Margin = new System.Windows.Forms.Padding(4);
            createBrokerButton.Name = "createBrokerButton";
            createBrokerButton.Size = new System.Drawing.Size(180, 53);
            createBrokerButton.TabIndex = 17;
            createBrokerButton.Text = "Create Broker";
            createBrokerButton.UseVisualStyleBackColor = false;
            createBrokerButton.Click += createBrokerButton_Click;
            // 
            // panelButtons
            // 
            panelButtons.Controls.Add(fireIntent);
            panelButtons.Controls.Add(createBrokerButton);
            panelButtons.Controls.Add(connectToBrokerButton);
            panelButtons.Controls.Add(submitContextButton);
            panelButtons.Dock = System.Windows.Forms.DockStyle.Top;
            panelButtons.Location = new System.Drawing.Point(0, 365);
            panelButtons.Margin = new System.Windows.Forms.Padding(2);
            panelButtons.Name = "panelButtons";
            panelButtons.Padding = new System.Windows.Forms.Padding(22, 21, 22, 21);
            panelButtons.Size = new System.Drawing.Size(1307, 85);
            panelButtons.TabIndex = 15;
            // 
            // fireIntent
            // 
            fireIntent.Anchor = System.Windows.Forms.AnchorStyles.Left;
            fireIntent.BackColor = System.Drawing.Color.FromArgb(79, 77, 255);
            fireIntent.Enabled = false;
            fireIntent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            fireIntent.ForeColor = System.Drawing.Color.White;
            fireIntent.Location = new System.Drawing.Point(713, 11);
            fireIntent.Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            fireIntent.Name = "fireIntent";
            fireIntent.Size = new System.Drawing.Size(206, 53);
            fireIntent.TabIndex = 19;
            fireIntent.Text = "Fire Intent";
            fireIntent.UseVisualStyleBackColor = false;
            fireIntent.Click += fireIntent_Click;
            // 
            // MainWindow
            // 
            AutoScaleDimensions = new System.Drawing.SizeF(13F, 32F);
            AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            BackColor = System.Drawing.Color.FromArgb(30, 31, 35);
            ClientSize = new System.Drawing.Size(1307, 1212);
            Controls.Add(statusStrip);
            Controls.Add(embeddedViewPanel);
            Controls.Add(panelButtons);
            Controls.Add(tableLayoutPanel1);
            Controls.Add(separator);
            Controls.Add(panelUnderline);
            Icon = (System.Drawing.Icon)resources.GetObject("$this.Icon");
            Margin = new System.Windows.Forms.Padding(7, 9, 7, 9);
            Name = "MainWindow";
            Text = "Interop Example Tool";
            statusStrip.ResumeLayout(false);
            statusStrip.PerformLayout();
            tableLayoutPanel1.ResumeLayout(false);
            tableLayoutPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            panelUnderline.ResumeLayout(false);
            panelUnderline.PerformLayout();
            panelButtons.ResumeLayout(false);
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private System.Windows.Forms.StatusStrip statusStrip;
        private System.Windows.Forms.ToolStripStatusLabel openFinStatusLabel;
        private System.Windows.Forms.ToolStripStatusLabel orderStatusLabel;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Label ContextInputLabel;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label receivedInstrument;
        private System.Windows.Forms.Label receivedContext;
        private System.Windows.Forms.ComboBox contextGroupComboBox;
        private System.Windows.Forms.ComboBox ContextItemComboBox;
        private System.Windows.Forms.TextBox interopBrokerInput;
        private System.Windows.Forms.Panel embeddedViewPanel;
        // private Openfin.WinForm.EmbeddedView embeddedView;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox contextTypeDropDown;
        private System.Windows.Forms.Label separator;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panelUnderline;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button submitContextButton;
        private System.Windows.Forms.Button connectToBrokerButton;
        private System.Windows.Forms.Button createBrokerButton;
        private System.Windows.Forms.Panel panelButtons;
        private System.Windows.Forms.Button fireIntent;
    }
}

